var incident_id = 0;
var currentQuestion = "";
var currentParentKey = 0;
var currentTreeOptions = [];
var selectedAnswers = [];
var dynamicQuestionJson = [];
var currentForm = 0;
var dependedQuestionsAnswers = {};
var p_bar = 0;

$(document).ready(function () {

	$("#dynamicNext").attr("disabled", "disabled");

	// On page refresh start from where user left
	fetchState();

	$(".progress-bar").css("width", Math.round(p_bar) + "%");              
	$(".progress-text").text(Math.round(p_bar) + "% Completed");

	$("#dynamicBack").click(function (event) {
		event.preventDefault();
		$("#dynamicNext").removeAttr("disabled");
		// Set progress
		p_bar -= 10;
		$(".progress-bar").css("width", Math.round(p_bar) + "%");              
		$(".progress-text").text(Math.round(p_bar) + "% Completed");

		if (selectedAnswers.length == 0) {			
			// Redirect back to actual previous page
			window.location.href = baseURL + "shareIncident";
		} else {
			// Back to previous question

			// Get previous question back
			var lastQuestion = selectedAnswers.pop();
			currentParentKey =
				lastQuestion.currentQuestion.currentParentKey;
			currentTreeOptions =
				lastQuestion.currentQuestion.currentTreeOptions;

			// Has form changed to previous form?
			if(currentForm!=lastQuestion.currentQuestion.currentForm) {
				console.log('form changed!');
				currentForm = lastQuestion.currentQuestion.currentForm;
				setFormDynamicQuestion(clientForms[currentForm], function() {
					// Show the previous question
					getDynamicQuestions(
						lastQuestion.currentQuestion.id,
						lastQuestion
					);	
				});
			} else {
				// Show the previous question
				getDynamicQuestions(
					lastQuestion.currentQuestion.id,
					lastQuestion
				);
			}


		}
	});

});

/** State Management */
function fetchState() {
	if(localStorage.getItem("selectedAnswers")!=undefined) {
		console.log('setting state back');
		clientForms = JSON.parse(localStorage.getItem("clientForms"));
		dynamicQuestionOptionJson = JSON.parse(localStorage.getItem("dynamicQuestionOptionJson"));
		incident_id = parseInt(localStorage.getItem("incident_id"));
		currentQuestion = JSON.parse(localStorage.getItem("currentQuestion"));
		currentParentKey = parseInt(localStorage.getItem("currentParentKey"));
		currentTreeOptions = JSON.parse(localStorage.getItem("currentTreeOptions"));
		selectedAnswers = JSON.parse(localStorage.getItem("selectedAnswers"));
		dynamicQuestionJson = JSON.parse(localStorage.getItem("dynamicQuestionJson"));
		currentForm = parseInt(localStorage.getItem("currentForm"));
		dependedQuestionsAnswers = JSON.parse(localStorage.getItem("dependedQuestionsAnswers"));
	}
	console.log(selectedAnswers);

	if(selectedAnswers.length==0) {
		intiateForm();
	} else {
		getDynamicQuestions(currentQuestion.id, null);
	}
}

function saveStateLocally() {
	// Save data to localstorage
	localStorage.setItem("clientForms", JSON.stringify(clientForms));
	localStorage.setItem("dynamicQuestionOptionJson", JSON.stringify(dynamicQuestionOptionJson));
	localStorage.setItem("incident_id", incident_id);
	localStorage.setItem("currentQuestion", JSON.stringify(currentQuestion));
	localStorage.setItem("currentParentKey", currentParentKey);
	localStorage.setItem("currentTreeOptions", JSON.stringify(currentTreeOptions));
	localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
	localStorage.setItem("dynamicQuestionJson", JSON.stringify(dynamicQuestionJson));
	localStorage.setItem("currentForm", currentForm);
	localStorage.setItem("dependedQuestionsAnswers", JSON.stringify(dependedQuestionsAnswers));
}

function resetState() {
	localStorage.removeItem("clientForms");
	localStorage.removeItem("dynamicQuestionOptionJson");
	localStorage.removeItem("incident_id");
	localStorage.removeItem("currentQuestion");
	localStorage.removeItem("currentParentKey");
	localStorage.removeItem("currentTreeOptions");
	localStorage.removeItem("selectedAnswers");
	localStorage.removeItem("dynamicQuestionJson");
	localStorage.removeItem("currentForm");
	localStorage.removeItem("dependedQuestionsAnswers");
}
/* State Management End */

function showNextForm() {
	if(clientForms[currentForm+1]!=undefined) {
		currentForm++;
		console.log('moving forward to form '+currentForm);
		intiateForm();
	} else {
		console.log("The END!");
	}
}

function intiateForm() {
	var form = clientForms[currentForm];
	setFormDynamicQuestion(form, function() {
		// Reset counters
		currentParentKey = 0;
		if(dynamicQuestionJson.length>0) {
			currentTreeOptions  = dynamicQuestionJson[0]["on_option_id"];

			getDynamicQuestions(dynamicQuestionJson[0].question_id, null);
		} else {
			showNextParentQuestion();
		}
	});
}

function setFormDynamicQuestion(form, callback) {
	if(form.type=="logic") {
		// figure out the actual answer to use to get the logical questions
		var logicDetails = JSON.parse(form.question_ids_json);
		var dependant_question_id = logicDetails.dependant_question_id;
		var answer_type = logicDetails.answer_type;
		if(answer_type=="main") {
			var dependent_answers = dependedQuestionsAnswers[dependant_question_id]["main_answers"];
		} else if (answer_type=="parent") {
			var dependent_answers = dependedQuestionsAnswers[dependant_question_id]["parent_answers"];
		} else {
			// answer_type = "actual"
			var dependent_answers = dependedQuestionsAnswers[dependant_question_id]["answers"];
		}

		// make a ajax call to get combination json data
		$.ajax({
			url: baseURL+'get-logical-questions',
			type: 'POST',
			data: {form_id: form.id, question_id:dependant_question_id, ans_ids: dependent_answers},
		})
		.done(function(data) {
			console.log("success");
			var parsedData = JSON.parse(data);
			dynamicQuestionJson = parsedData.comb_json;

			var relatedquestions = Object.values(parsedData.questions);
			// Update questin options
			relatedquestions.forEach(function(questionObj) {
				dynamicQuestionOptionJson[questionObj.question.id] = questionObj;
			});
			callback();
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
		// When data was already available
		/*var parsedJSON = JSON.parse(form.question_ids_json);
		if(parsedJSON[dependent_answers]!=undefined) {
			dynamicQuestionJson = parsedJSON[dependent_answers];
			console.log(dynamicQuestionJson);
		} else {
			dynamicQuestionJson = [];
		}*/
	} else {
		dynamicQuestionJson = JSON.parse(form.question_ids_json);
		callback();
	}
}

function showNextParentQuestion() {
	if (dynamicQuestionJson[currentParentKey + 1] != undefined) {
		var nextParent = dynamicQuestionJson[++currentParentKey];
		currentTreeOptions = nextParent["on_option_id"];
		getDynamicQuestions(nextParent["question_id"], null);
	} else {
		// dynamicQuestionJson recursion completed
		// Check if form needs to be submitted
		var thisForm = clientForms[currentForm];
		if(thisForm.is_submit==true) {
			// Submit the form and get back id
			console.log("answer");
			console.log(selectedAnswers);

			$.ajax({
				url: baseURL+'/save-incident',
				type: 'POST',
				data: {answers_json: JSON.stringify(selectedAnswers), incident_id: incident_id},
			})
			.done(function(data) {
				console.log("success");
				var parsedData = JSON.parse(data);
				if(parsedData.success==true) {
					incident_id = parsedData.incident_id;
					onFormSaved(thisForm);
				} else {
					alert('Something went wrong!');
				}
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
		} else {
			// continue with the form recursion
			showNextForm();
		}
	}
}

function getDynamicQuestions(questionId, lastQuestion) {
	var parsedData = dynamicQuestionOptionJson[questionId];
	currentQuestion = parsedData["question"];
	currentQuestion.currentParentKey = currentParentKey;
	currentQuestion.currentForm = currentForm;

	// Set question and subtext
	$("#question_span").html(currentQuestion.question);
	$("#subtext_span").html(currentQuestion.subtext);

	createDynamicElement(parsedData, lastQuestion);

	saveStateLocally();
}

function createDynamicElement(data, lastQuestion) {
	var properties = JSON.parse(data.question.properties);
	switch (properties.type) {
		case "radio":
			radioField(data, lastQuestion);
			break;

		case "text":
			textField(data, properties, lastQuestion);
			break;

		case "estimate-datepicker":
			estimateDatePickerField(data, lastQuestion);
			break;

		case "estimate-time-or-rangepicker":
			estimateTimeRangePickerField(data, lastQuestion);
			break;

		case "checkbox":
			checkboxField(data, lastQuestion);
			break;

		case "incident-address-form":			
			addressFormField(data, properties, lastQuestion);
			break;

		case "incident-pin-map":
			locationPinMapField(data, lastQuestion);
			break;

		default:
			radioField(data, lastQuestion);
			break;
	}
}

function saveCurrentAnswer(answer_id, answerJson) {
	// Disable next button
	$("#dynamicNext").attr("disabled", "disabled");
	
	// Save the questions and answers
	if (currentTreeOptions.length == 0) {
		currentQuestion.currentTreeOptions = [];
	} else {
		currentQuestion.currentTreeOptions = currentTreeOptions;
	}
	currentQuestion.answerJson = answerJson;
	selectedAnswers.push({ currentQuestion });

	// Show Next Questions
	if (currentTreeOptions.length == 0) {
		// Goto next parent if exists
		showNextParentQuestion();
		//p_bar += 10;
		$(".progress-bar").css("width", Math.round(p_bar) + "%");              
		$(".progress-text").text(Math.round(p_bar) + "% Completed");
	} else {
		// Continue parsing the tree
		for (var i = 0; i < currentTreeOptions.length; i++) {
			var option = currentTreeOptions[i];
			if (option.id == answer_id) {
				currentTreeOptions = option["on_option_id"];
				getDynamicQuestions(option["question_id"], null);
				break;
			}
			// Last loop
			if (i == currentTreeOptions.length - 1) {
				// None of the option matches the condition
				// Continue to next parent if exists.
				showNextParentQuestion();
			}
		}
	}
}

function onFormSaved(thisForm) {
	// Reset the variables to disable back
	clientForms.splice(0, currentForm+1);
	currentForm=-1;
	currentQuestion = "";
	currentParentKey = 0;
	currentTreeOptions = [];
	selectedAnswers = [];
	dynamicQuestionJson = {};

	if(thisForm.thank_you_web!=null) {
		var thankyouJson = JSON.parse(thisForm.thank_you_web);
		$(".dynamic-success-title").html(thankyouJson.title);
		$(".dynamic-success-content").html(thankyouJson.content);
		var links = '';
		var redirect_url = "";
		thankyouJson.links.forEach(function(link) {
			if(link.is_next)
				links += '<a href="#" class="btn w-50 btn_purple mb-4 dynamic-thankyou-next">'+link.title+'</a>';
			else {
				redirect_url = link.redirect_url!=undefined?baseURL+link.redirect_url:'#';
				links += '<a href="#" class="btn w-50 btn_p_white dynamic-thankyou-end">'+link.title+'</a>';
			}
		});
		$(".dynamic-success-link").html(links);

		// Show thank you div
		$(".questionaire").hide();
		$(".thankyou-section").show();

		$(".dynamic-thankyou-next").click(function(event) {
			event.preventDefault();
			showNextForm();

			// Hide thank you div
			$(".thankyou-section").hide();
			$(".questionaire").show();
		});

		$(".dynamic-thankyou-end").click(function(event) {
			event.preventDefault();
			resetState();
			window.location.href = redirect_url+'?inc='+incident_id;
		});
	} else {
		// continue with the form recursion
		showNextForm();
	}
}