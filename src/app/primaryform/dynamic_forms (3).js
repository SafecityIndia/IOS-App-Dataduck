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

	$("#dynamicNext").click(function (event) {
		$("#dynamicNext").attr("disabled", "disabled");
		// Set answers
		setAnswers(function(answer_id) {
			if (currentTreeOptions.length == 0) {				
				//console.log(currentQuestion);
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
		});

	});

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

function setAnswers(callback) {
	var properties = JSON.parse(currentQuestion.properties);
	if (properties.type == "radio") {
		// Set answer
		var answer_id = $("input[name=" + currentQuestion.elementId + "]:checked").val();
		var answer = $("input[name=" + currentQuestion.elementId + "]:checked").data('val');

		// Set other answers
		var other_answers = {};
		if($("input[name=" + currentQuestion.elementId + "]:checked").data('showtextbox')==true) {
			other_answers[answer_id] = $("input[name=option"+answer_id+"textbox").val();
		}

		var subanswer_ids = '';
		// Get suboption answers of type checkbox
		$("input[name=suboption" + answer_id + "checkbox]:checked").each(function(index, el) {
			subanswer_ids += ','+$(this).val();
			answer += ','+$(this).data('val');
		});

		// Get suboption answers of type radio
		subanswer_ids += ','+$("input[name=suboption" + answer_id + "radio]:checked").val();
		answer += ','+$("input[name=suboption" + answer_id + "radio]:checked").data('val');

		// Update answer_id by appending subanswer id as well
		answer_id += subanswer_ids;

		// Validate answer
		if (answer_id === undefined) {
			$("#dynamicNext").attr("disabled", "disabled");
			return false;
		}

		var answerJson = {
			"option_id": answer_id,
			"other_answers": other_answers,
			"answer": answer
		};
		p_bar += 10;
	} else if (properties.type == "text") {
		var answer_id = 0;
		var answer = $("#" + currentQuestion.elementId).val();

		if (answer == "") {
			$("#dynamicNext").attr("disabled", "disabled");
			return false;
		}
		
		var answerJson = {
			"option_id": answer_id,
			"answer": answer
		};
		p_bar += 5;
	} else if (properties.type == "checkbox") {
		var answer_id  = '';
		var answer = '';
		var other_answers = {};
		var parent_answer_arr = [];
		var main_answer_arr = [];

		// Get all checked options
		$("input[name=" + currentQuestion.elementId + "]:checked").each(function(index, el) {
			var this_ans_id = $(this).val();
			answer += ','+$(this).data('val');
			answer_id += ','+this_ans_id;

			// Has Subtext? Get textbox value
			if($(this).data('showtextbox')==true) {
				other_answers[this_ans_id] = $("input[name=option"+this_ans_id+"textbox").val();
			}

			// Is Main? Used for logical questions of categories
			if($(this).data('ismain'))
				main_answer_arr.push(this_ans_id);

			// Has parent id? Used for secondary questions
			var parent_id = $(this).data('parentid');
			parent_id = parent_id==0 || parent_id==undefined?parseInt(this_ans_id):parent_id;
			if(!parent_answer_arr.includes(parent_id))
				parent_answer_arr.push(parent_id);

			// Get answer of suboption of type radio
			// Currently there can only be two types of suboptions i.e. radio and checkbox
			// Checbox suboption answer already gets selected as normal option
			// Below code fetches answer for suboption of type radio.
			if($(this).data('hassuboptions')==true) {
				var suboptionElem = $("input[name=suboption"+this_ans_id+"]:checked"); 
				answer += ',' + suboptionElem.data('val');
				answer_id += ',' + suboptionElem.val();
			}

		});

		answer_id = answer_id.replace(',', '');

		if (answer_id == "") {
			$("#dynamicNext").attr("disabled", "disabled");
			return false;
		}
		else {
			var parent_answer_id = parent_answer_arr.sort().join(',');
			var main_answer_id  = main_answer_arr.sort().join(',');
			var answerJson = {
				"option_id": answer_id,
				"main_answer_id": main_answer_id,
				"parent_option_id": parent_answer_id,
				"other_answers": other_answers,
				"answer": ""
			}
			answer = answer.replace(',', '');
			var parent_answer_id = parent_answer_arr.sort().join(',');
			var main_answer_id  = main_answer_arr.sort().join(',');
			var answerJson = {
				"option_id": answer_id,
				"main_answer_id": main_answer_id,
				"parent_option_id": parent_answer_id,
				"other_answers": other_answers,
				"answer": answer
			};

			if(currentQuestion.has_logic_dependency=="1") {
				dependedQuestionsAnswers[currentQuestion.id] = {
					"answers": answer_id,
					"main_answers": main_answer_id,
					"parent_answers": parent_answer_id
				};
			}
		}
		p_bar += 10;
	} else if(properties.type == "estimate-datepicker") {
		var answer_id = 0;
		var answer = $("input[name="+currentQuestion.elementId+"]").val();
		var isEstimate = $("input[name="+currentQuestion.elementId+"checked]").is(':checked');
		if (answer == "") {
			$("#dynamicNext").attr("disabled", "disabled");
			return false;
		}
		var answerJson = {
			"option_id": answer_id,
			"answer": answer,
			"isEstimate": isEstimate
		};
		p_bar += 5;
	} else if(properties.type == "estimate-time-or-rangepicker") {
		var answer_id = 0;
		var answer = $("input[name="+currentQuestion.elementId+"]").val();
		var isEstimate = $("input[name="+currentQuestion.elementId+"checked]").is(':checked');

		if(answer == "") {
			var timeStart = $("input[name="+currentQuestion.elementId+"start]").val();
			var timeEnd   = $("input[name="+currentQuestion.elementId+"end]").val();
			answer = timeStart+'-'+timeEnd;
			isEstimate = true;
		
			var timeStart1 = new Date("01/01/2020 " + timeStart).getHours();
			var timeEnd1 = new Date("01/01/2020 " + timeEnd).getHours();
			var hourDiff = timeEnd1 - timeStart1;

			if (timeStart == "" || timeEnd == "") {
				if(!$('.timeRange').next('.timeRange_valid').length) {
					$('.timeRange').after('<div class="validdation_time" style="color:red;">' + properties["validations"][0]["startendtime"] + '</div>');
					//$('.timeRange').after('<div class="timeRange_valid" style="color:red;">Please select Start Time and End Time Both.</div>');
				}			
				$("#dynamicNext").attr("disabled", "disabled");
				return false;
			}
			else if (hourDiff < 0) {
				if(!$('.timeRange').next('.timeRange_valid').length) {
					$('.timeRange').after('<div class="validdation_time" style="color:red;">' + properties["validations"][0]["timediff"] + '</div>');
					//$('.timeRange').after('<div class="timeRange_valid" style="color:red;">End Time is Less Than Start Time.</div>');
				}			
				$("#dynamicNext").attr("disabled", "disabled");
				return false;
			}
		}
		var answerJson = {	
			"option_id": answer_id,
			"answer": answer,
			"isEstimate": isEstimate
		};
		p_bar += 5;
	} else if(properties.type == "incident-address-form") {
		var answer_id = 0;
		var building = $("input[name="+currentQuestion.elementId+"building]").val();
		var landmark = $("input[name="+currentQuestion.elementId+"landmark]").val();
		var area = $("input[name="+currentQuestion.elementId+"area]").val();
		var city = $("input[name="+currentQuestion.elementId+"city]").val();
		var state = $("input[name="+currentQuestion.elementId+"state]").val();
		var country = $("input[name="+currentQuestion.elementId+"country]").val();
		var latitude = $("input[name="+currentQuestion.elementId+"latitude]").val();
		var longitude = $("input[name="+currentQuestion.elementId+"longitude]").val();

		if (area == "" || city == "" || state == "" || country == "") {
			if (area == "") {
				if(!$('.suburb').next('.validdation_suburb').length) {
					$('.suburb').after('<div class="validdation_suburb" style="color:red;">'+properties.validations[0]["message"]+'</div>');
				}	
			}
			if (city == "") {
				if(!$('.city').next('.validdation_city').length) {
					$('.city').after('<div class="validdation_city"><div style="color:red;">'+properties.validations[0]["message"]+'</div>');
				}
			}
			if (state == "") {
				if(!$('.state').next('.validdation_state').length) {
					$('.state').after('<div class="validdation_state" style="color:red;">'+properties.validations[0]["message"]+'</div>');
				}
			}
			if (country == "") {
				if(!$('.country').next('.validdation_country').length) {
					$('.country').after('<div class="validdation_country" style="color:red;">'+properties.validations[0]["message"]+'</div>');
				}
			}
			$("#dynamicNext").attr("disabled", "disabled");
			return false;
		}
		
		$("#dynamicNext").removeAttr("disabled");
		var answerJson = {
			"option_id": answer_id,
			"answer": "",
			"address": {
				"building": building, 
				"landmark": landmark, 
				"area": area, 
				"city": city, 
				"state": state, 
				"country": country,
				"latitude": latitude,
				"longitude": longitude
			}
		};
		p_bar += 10;
	} else if(properties.type == "incident-pin-map") {
		var answer_id = 0;
		var isAccepted = $("input[name="+currentQuestion.elementId+"checked]").is(':checked');
		var latitude = $("#"+currentQuestion.elementId+"latitude").val();
		var longitude = $("#"+currentQuestion.elementId+"longitude").val();
		var answerJson = {
			"option_id": 0,
			"answer": "",
			"address": {
				"latitude": latitude,
				"longitude": longitude
			},
			"isAccepted": isAccepted
		};
		p_bar += 5;
	}

	// Save the questions and answers
	if (currentTreeOptions.length == 0) {
		currentQuestion.currentTreeOptions = [];
	} else {
		currentQuestion.currentTreeOptions = currentTreeOptions;
	}
	currentQuestion.answerJson = answerJson;
	selectedAnswers.push({ currentQuestion });

	// Return answer id
	callback(answer_id);
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
			window.location.href = redirect_url;
		});
	} else {
		// continue with the form recursion
		showNextForm();
	}
}

function showNextForm() {
	if(clientForms[currentForm+1]!=undefined) {
		currentForm++;
		console.log('moving forward to form '+currentForm);
		intiateForm();
	} else {
		console.log("The END!");
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
			componentRadio(data, lastQuestion);
			break;

		case "text":
			componentText(data, properties, lastQuestion);
			break;

		case "estimate-datepicker":
			componentEstimateDatepicker(data, lastQuestion);
			break;

		case "estimate-time-or-rangepicker":
			componentEstimateTimeOrRangepicker(data, lastQuestion);
			break;

		case "checkbox":
			componentCheckbox(data, lastQuestion);
			break;

		case "incident-address-form":			
			componentIncidentAddressForm(data, properties, lastQuestion);
			break;

		case "incident-pin-map":
			componentIncidentPinMap(data, lastQuestion);
			break;

		default:
			componentRadio(data, lastQuestion);
			break;
	}
}

/** Get Todays date helper */
function getTodayDate(format) {
	var date = new Date().toJSON().slice(0, 10);
	switch(format) {
		case 'Y-m-d':
			return date;
		case 'd-m-Y':
			return date.slice(8, 10) + '/'  + date.slice(5, 7) + '/'  + date.slice(0, 4);
		case 'm-d-Y':
			return date.slice(5,7)+'/'+date.slice(8, 10)+'/'+date.slice(0, 4);
		default:
			return date;
	}
}

/** Custom components */
function componentText(data, properties, lastQuestion) {
	var answer = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.answer : "";
	currentQuestion.elementId = "option" + data["question"]["id"];

	/*var attr = properties.validations;
	if (typeof attr !== typeof undefined && attr !== false) {
	    console.log(attr);
	}*/
	console.log(properties.validations.length);
	if (properties.validations.length == 4) {
		var validation_type = properties.validations[1].type != null ? properties.validations[1].type : "text";
		var number_req_msg = '<div class="validdation_text" style="color:red;">' + properties["validations"][0]["message"] + '</div>';
    	var number_type_msg = '<div class="validdation_text" style="color:red;">' + properties["validations"][1]["message"] + '</div>';
    	var number_min_msg = '<div class="validdation_text" style="color:red;">' + properties["validations"][2]["message"] + '</div>';
    	var number_max_msg = '<div class="validdation_text" style="color:red;">' + properties["validations"][3]["message"] + '</div>';
	}
	else {
		var number_req_msg = '<div class="validdation_text" style="color:red;">' + properties["validations"][0]["message"] + '</div>';
		var text_alpha_valid_msg = '<div class="validdation_text" style="color:red;">' + properties["validations"][1]["message"] + '</div>';
	}
	
	console.log(validation_type);
	if(validation_type == 'number') {
		var elementHtml = `<input type="${properties.validations[1].type}" id="option${data["question"]["id"]}" class="form-control inputBox getAge" name="option${data["question"]["id"]}" placeholder="${properties.placeholder}" value="${answer}" min="${properties.validations[2].min}" max="${properties.validations[3].max}" >`;
	}
	else {
		var elementHtml = `<input type="text" id="option${data["question"]["id"]}" class="form-control inputBox getAge" name="option${data["question"]["id"]}" placeholder="${properties.placeholder}" value="${answer}" >`;		
	}
	//var elementHtml = `<input type="text" id="option${data["question"]["id"]}" class="form-control inputBox getAge" name="option${data["question"]["id"]}" placeholder="${properties.placeholder}" value="${answer}" >`;
	//console.log(elementHtml);
	$("#options").html(elementHtml);

	$('.inputBox').focus();

	$(".inputBox").keyup(function(e) {
		$('.validdation_text').remove();
		if(validation_type == 'number') {
			var input_val =  parseInt($(".inputBox").val());
			if (input_val) {
				if (input_val < 18) {
					$('.inputBox').after('<div class="validdation_text" style="color:red;">'+number_min_msg+'</div>');
					$("#dynamicNext").attr("disabled", "disabled");
				}
				else if (input_val > 40) {
					$('.inputBox').after('<div class="validdation_text" style="color:red;">'+number_max_msg+'</div>');
					$("#dynamicNext").attr("disabled", "disabled");
				}
				else {
					$('.validdation_text').remove();
					$("#dynamicNext").removeAttr("disabled");
				}
			}
			else {
				$('.inputBox').after('<div class="validdation_text" style="color:red;" >'+number_type_msg+'</div>');
				$("#dynamicNext").attr("disabled", "disabled");
			}
		}
		else {
			if (($(".inputBox").val()) != "") {
				var txt_value = $(".inputBox").val();
				if(ValidateText(txt_value)){
					$('.validdation_text').remove();
					$("#dynamicNext").removeAttr("disabled");
				}
				else {
					$('#options').append('<div class="validdation_text" style="color:red;">'+text_alpha_valid_msg+'</div>');
					$("#dynamicNext").attr("disabled", "disabled");
				}				
			}
			else {
				$('#options').append('<div class="validdation_text" style="color:red;">'+number_req_msg+'</div>');
				$("#dynamicNext").attr("disabled", "disabled");
			}
		}
    });
}

function ValidateText(value) {
    //Regex for Valid Characters i.e. Alphabets, Numbers and Space.
    var regex = /^[\w\s.-]+$/

    //Validate TextBox value against the Regex.
    var isValid = regex.test(value);
    /*if (!isValid) {
        alert("Contains Special Characters.");
    } else {
        alert("Does not contain Special Characters.");
    }*/
    return isValid;
}

function componentRadio(data, lastQuestion) {
	var selectedAnswerId =
		lastQuestion != null ? lastQuestion.currentQuestion.answerJson.option_id : null;
	var selectedAnswerArr = selectedAnswerId==null?[]:selectedAnswerId.split(',');
	currentQuestion.elementId = "option" + data["question"]["id"];

	var thisQuestion = dynamicQuestionOptionJson[data["question"]["id"]];
	var hasSuboptions = thisQuestion['suboptions']==undefined?false:true;

	var optionHtml = "";
	data["options"].forEach(function (option) {
		var showTextbox = option.textbox_placeholder!=null;
		var isSelected = selectedAnswerArr.includes(option.id);
		optionHtml += `
			<div class="inputGroup custom-control">
			  <input type="radio" id="${option.id}" name="option${
			data["question"]["id"]
		}" class="custom-control-input dynamic-radio" data-val="${option.title}"  data-hasSuboptions="${hasSuboptions}" value="${option.id}" 
		${isSelected?"checked":""} 
		data-showtextbox="${showTextbox}">
			  <label class="custom-control-label label1" for="${option.id}">${
			option.title
		}</label>
			</div>
		`;
		if(showTextbox) {
			var otheranswers =  selectedAnswerId!=null?lastQuestion.currentQuestion.answerJson.other_answers:null;
			var othertextval = otheranswers!=null && otheranswers[option.id]!=undefined?otheranswers[option.id]:"";
			optionHtml += `
			<input type="text" class="form-control input1 specifyBox1 dynamic-radio-textbox ${isSelected?"":"d-none"}" name="option${option.id}textbox" placeholder="${option.textbox_placeholder}" value="${othertextval}">
			`;
		} else if(hasSuboptions && thisQuestion["suboptions"][option.id]!=undefined) {
			optionHtml += `<ul id="suboption-container-${option.id}" class="custom-radio-inside specifyBoxradio suboption-container" style="${isSelected?'':'display:none'}"`;
			var subOptionProperties = JSON.parse(option.suboption_properties);
			thisQuestion['suboptions'][option.id].forEach(function (suboption) {
				var isSuboptionSelected = selectedAnswerArr.includes(suboption.id);
				if(subOptionProperties.type=='checkbox') {
					optionHtml += `
						<li>
						  <div class="inputGroup custom-control shareincidentform">
						    <input type="checkbox" id='${suboption.id}' name="suboption${option.id}checkbox" class="custom-control-input" value="${suboption.id}" data-parentid="${suboption.parent_id}" data-ismain="${suboption.is_main}" data-val="${suboption.title}" data-hasSuboptions="false" data-showtextbox="false" ${isSuboptionSelected?"checked":""} >
						    <label class="custom-control-label label1" for="${suboption.id}">${suboption.title}</label>
						  </div>
						</li>`;
				} else {
					optionHtml += `
						<li>
	                      <div class="inputGroup custom-control shareincidentform">
	                        <input type="radio" id='${suboption.id}' name="suboption${option.id}radio" class="custom-control-input" value="${suboption.id}"  data-val="${suboption.title}" ${isSuboptionSelected?"checked":""}>
	                        <label class="custom-control-label label1" for="${suboption.id}">${suboption.title}</label>
	                      </div>
	                    </li>`;
				}
			});

			optionHtml += `</ul>`;
		}
	});
	$("#options").html(optionHtml);

	$(".dynamic-radio").click(function(event) {
		$("#dynamicNext").removeAttr("disabled");
		$(".dynamic-radio-textbox").addClass('d-none');

		var optionid = $(this).attr('id');
		// Handle other textbox toggle
		if($(this).data('showtextbox')==true) {
			if($(this).is(':checked')) {
				$("input[name=option"+optionid+"textbox").removeClass('d-none');
			} else {
				$("input[name=option"+optionid+"textbox").addClass('d-none');
			}
		}

		// Handle suboptions toggle
		if(!$("#suboption-container-"+optionid).is(':visible')) {
			// Hide all sub options first
			$(".suboption-container").fadeOut('slow');
			$(".suboption-container input[type=checkbox]").prop('checked', false);
			$(".suboption-container input[type=radio]").prop('checked', false);

			// Show sub option if current selection has one
			if($(this).data('hassuboptions')==true && $(this).is(':checked'))
				$("#suboption-container-"+optionid).fadeIn('slow');
		}
	});
}

function componentCheckbox(data, lastQuestion) {
	var selectedAnswerId =
		lastQuestion != null ? lastQuestion.currentQuestion.answerJson.option_id : null;
	var selectedAnswerArr = selectedAnswerId==null?[]:selectedAnswerId.split(',');
	currentQuestion.elementId = "option" + data["question"]["id"];
	var elementHtml = `<div class="row">`;
	var i = 0;
	if(data["question"].is_category==true) {
		var data_options = [];
		categories.forEach(function (category) {
			data_options.push({
				'id': category.id,
				'textbox_placeholder': null,
				'title': category.title,
				'parent_id': category.parent_id,
				'is_main': category.is_main
			});
		});
		data["options"] = data_options;
		console.log('setting options for category');
	}
	var thisQuestion = dynamicQuestionOptionJson[data["question"]["id"]];
	var hasSuboptions = thisQuestion['suboptions']==undefined?false:true;
	data["options"].forEach(function (option) {
		var showTextbox = option.textbox_placeholder!=null;
		var isSelected = selectedAnswerArr.includes(option.id);
		if(!hasSuboptions)
			elementHtml += `<div class="col-md-6">`;
		elementHtml += `
			<div class="inputGroup custom-control shareincidentform">
			  <input type="checkbox" id="${option.id}" data-id="1"  name="option${data["question"]["id"]}" class="custom-control-input getAttr dynamic-checkbox" value="${option.id}" data-parentid="${option.parent_id}" data-ismain="${option.is_main}" data-val="${option.title}" data-hasSuboptions="${hasSuboptions}" data-showtextbox="${showTextbox}" ${isSelected?"checked":""}>
			  <label class="custom-control-label label1" for="${option.id}">${option.title}</label>
			</div>
		`;
		if(showTextbox) {
			var otheranswers =  selectedAnswerId!=null?lastQuestion.currentQuestion.answerJson.other_answers:null;
			var othertextval = otheranswers!=null && otheranswers[option.id]!=undefined?otheranswers[option.id]:"";
			elementHtml += `
			<input type="text" class="form-control input1 specifyBox1 shareincidentform ${isSelected?"":"d-none"}" name="option${option.id}textbox" placeholder="${option.textbox_placeholder}" value="${othertextval}">
			`;
		} else if(hasSuboptions && thisQuestion["suboptions"][option.id]!=undefined) {
			elementHtml += `<ul id="suboption-container-${option.id}" style="${isSelected?'':'display:none'}" class="custom-radio-inside">`;

			var subOptionProperties = JSON.parse(option.suboption_properties);
			thisQuestion['suboptions'][option.id].forEach(function (suboption) {
				var isSuboptionSelected = selectedAnswerArr.includes(suboption.id);
				if(subOptionProperties.type=='checkbox') {
					elementHtml += `
						<li>
						  <div class="inputGroup custom-control shareincidentform">
						    <input type="checkbox" id='${suboption.id}' name="option${data["question"]["id"]}" class="custom-control-input" value="${suboption.id}" data-parentid="${suboption.parent_id}" data-ismain="${suboption.is_main}" data-val="${suboption.title}" data-hasSuboptions="false" data-showtextbox="false" ${isSuboptionSelected?"checked":""} >
						    <label class="custom-control-label label1" for="${suboption.id}">${suboption.title}</label>
						  </div>
						</li>`;
				} else {
					elementHtml += `
						<li>
	                      <div class="inputGroup custom-control shareincidentform">
	                        <input type="radio" id='${suboption.id}' name="suboption${option.id}" class="custom-control-input" value="${suboption.id}"  data-val="${suboption.title}" ${isSuboptionSelected?"checked":""}>
	                        <label class="custom-control-label label1" for="${suboption.id}">${suboption.title}</label>
	                      </div>
	                    </li>`;
				}
			});

			elementHtml += `</ul>`;
		}
		if(!hasSuboptions)
			elementHtml += `</div>`;
	});
	elementHtml += `</div>`;
	$("#options").html(elementHtml);

	$(".dynamic-checkbox").click(function(event) {
		if (($('input:checkbox:checked').length) > 0) {
			$("#dynamicNext").removeAttr("disabled");
		}
		else {
			$("#dynamicNext").attr("disabled", "disabled");
		}
		
		// Handle other textbox toggle
		var optionid = $(this).attr('id');
		if($(this).data('showtextbox')==true) {			
			if($(this).is(':checked')) {
				$("input[name=option"+optionid+"textbox").removeClass('d-none');				
			} else {
				$("input[name=option"+optionid+"textbox").addClass('d-none');
			}
		}

		// Handle suboptions toggle
		if($(this).data('hassuboptions')==true) {
			if($(this).is(':checked')) {
				$("#suboption-container-"+optionid).fadeIn('slow');
			} else {
				$("#suboption-container-"+optionid).fadeOut('slow');
				// Uncheck all suboptions
				$("#suboption-container-"+optionid+" input[type=checkbox]").prop('checked', false);
				$("#suboption-container-"+optionid+" input[type=radio]").prop('checked', false);
			}
		}
	});
}

function componentEstimateDatepicker(data, lastQuestion) {
	currentQuestion.elementId = "option" + data["question"]["id"];
	var answer = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.answer : "";
	var setDate = answer==""?getTodayDate('m-d-Y'):answer;
	var isEstimate = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.isEstimate: false;
	var elementHtml = "";
	elementHtml = `
					<label>
						<h6 class="textColor">Select Date</h6>
					</label>
					<div class="input-group date selectDate" id="datetimepicker" data-target-input="nearest">
                        <input type="text" class="form-control datetimepicker-input getDate"  name="option${data["question"]["id"]}" data-target="#datetimepicker">
                        <div class="input-group-append" data-target="#datetimepicker" data-toggle="datetimepicker">
                          <div class="input-group-text"> <img src="assets/images/calender.png" class="img-fluid"></div>
                        </div>
                      </div>
                      <div class="custom-control custom-checkbox estimate">
                        <input type="checkbox" name="option${data["question"]["id"]}checked" class="custom-control-input estimate" id="estimate" ${isEstimate?"checked":""}>
                        <label class="custom-control-label eLabel" for="estimate">This is an estimate</label>
                      </div>`;
	$("#options").html(elementHtml);

	// Initialize Datepicker
	var todaydate = new Date();
	$('#datetimepicker').datetimepicker({
	     format: 'L', 
	     todayHighlight: true,
	     showClose: true,
	     toolbarplacement: 'bottom',
	     showClear: true,
	     showClose: true,
	     endDate: todaydate,
	     maxDate: todaydate,
	     icons: { 
	       close: 'OK'
	     },
	     // debug: true
	});
	$('#datetimepicker').data("datetimepicker").date(setDate);

	$("#dynamicNext").removeAttr("disabled");

	/*$("#datetimepicker").click(function(event) {
		$("#dynamicNext").removeAttr("disabled");
	});*/
}

function componentEstimateTimeOrRangepicker(data, lastQuestion) {
	currentQuestion.elementId = "option" + data["question"]["id"];
	var answer = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.answer : "";
	var selectedTime = answer!="" && !answer.includes("-")?answer:"";
	var selectedStarTime = answer.includes("-")?answer.split("-")[0]:""; 
	var selectedEndTime = answer.includes("-")?answer.split("-")[1]:""; 
	var isEstimate = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.isEstimate: false;
	var elementHtml = "";
	elementHtml = `<div class="mainTime">
	                  <div class="row">
	                  	<div class="col-md-12">
	                  		<label><h6 class="textColor">Select Time</h6></label>
	                  	</div>
	                    <div class="col-md-8 col-sm-8 col-xs-12 col-12">
	                      <div class="input-group date selectTime" id="timepicker" data-target-input="nearest">
	                        <input type="text" class="form-control datetimepicker-input timepicker" name="option${data["question"]["id"]}" data-target="#timepicker" value=""/>
	                        <div class="input-group-append timePick" data-target="#timepicker" data-toggle="datetimepicker">
	                          <div class="input-group-text">
	                            <img src="assets/images/timer.png" class="img-fluid">
	                          </div>
	                        </div>
	                      </div>
	                    </div>
	                    <div class="col-md-4 col-sm-4 col-xs-12 col-12">
	                      <a class="clearTime btn animated fadeInUp pull-right mt-0 themeColor">Clear Time</a>
	                    </div>
	                  </div>
	                  <div class="custom-control custom-checkbox estimate mb-20">
	                    <input type="checkbox" name="option${data["question"]["id"]}checked" class="custom-control-input estimate1" id="estimate1" ${isEstimate?"checked":""}>
	                    <label class="custom-control-label eLabel" for="estimate1">This is an estimate</label>
	                  </div>
	                </div>

	                <div class="timeRange">
	                  <div class="text-center">
	                    <label class="themeColor">OR</label>
	                  </div>
	                  <div class="row">
	                    <div class="col-md-12">
	                      <label>
	                        <h6 class="textColor">Select a Time Range</h6>
	                      </label>
	                    </div>
	                    <div class="col-md-12">
	                      <div class="row">
	                        <div class="col-md-12">
	                          <div class="row">
	                            <div class="col-md-8">
	                              <div class="col-md-5 p-0 float-left">
	                                <div class="input-group date selectTime" id="timepicker1" data-target-input="nearest">
	                                  <input type="text" name="option${data["question"]["id"]}start" class="form-control datetimepicker-input startTime" data-target="#timepicker1" value=""/>
	                                  <div class="input-group-append rangeTime" data-target="#timepicker1" data-toggle="datetimepicker">
	                                    <div class="input-group-text"><img src="assets/images/timer.png" class="img-fluid"></div>
	                                  </div>
	                                </div>
	                              </div>
	                              <div class="col-md-2 text-center p-0 float-left">
	                                <span class="themeColor">To</span>
	                              </div>
	                              <div class="col-md-5 p-0 float-left">
	                                <div class="input-group date selectTime" id="timepicker2" data-target-input="nearest">
	                                  <input type="text" name="option${data["question"]["id"]}end" class="form-control datetimepicker-input endTime" data-target="#timepicker2" value=""/>
	                                  <div class="input-group-append rangeTime" data-target="#timepicker2" data-toggle="datetimepicker">
	                                    <div class="input-group-text"><img src="assets/images/timer.png" class="img-fluid"></div>
	                                  </div>
	                                </div>
	                              </div>
	                            </div>
	                            <div class="col-md-4">
	                              <a class="clearTimeRange btn animated fadeInUp pull-right mt-0 themeColor">Clear Time Range</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                    </div>
	                  </div> 
	                </div>
                `;
    $("#options").html(elementHtml);

    // Intialize Timepickers
    $('#timepicker').datetimepicker({
      format: 'LT',
    });
	$('#timepicker').data("datetimepicker").date(selectedTime);

    $('#timepicker1').datetimepicker({
      format: 'LT',
    });
	$('#timepicker1').data("datetimepicker").date(selectedStarTime);

    $('#timepicker2').datetimepicker({
      format: 'LT',
    });
	$('#timepicker2').data("datetimepicker").date(selectedEndTime);

	// Hide a picker if ones value is already selected
	if(selectedTime!="") {
  		$('.timeRange').css('opacity','0.2').css('pointer-events','none');
  		//$("#dynamicNext").removeAttr("disabled");
	} else if(selectedStarTime!="" && selectedEndTime!="") {
  		$('.mainTime').css('opacity','0.2').css('pointer-events','none');
  		//$("#dynamicNext").removeAttr("disabled");
	}

    // Hide/show other picker based on selections
    $(".timePick").click(function(e){
      $('.startTime').val('');
      $('.endTime').val('');
      $('.timeRange').css('opacity','0.2').css('pointer-events','none');
      $(".timeRange_valid").remove();
      $("#dynamicNext").removeAttr("disabled");
      $('.validdation_time').remove();
    });

    $(".clearTime").click(function(e){
      $('.timepicker').val('');
      $('.estimate1').prop('checked',false);
      $('.timeRange').css('opacity','1').css('pointer-events','all');
      $("#dynamicNext").attr("disabled", "disabled");
      $('.validdation_time').remove();
    });

    $(".rangeTime").click(function(e){
      $('.timepicker').val('');
      $('.estimate1').prop('checked',false);
      $('.mainTime').css('opacity','0.2').css('pointer-events','none');
      $(".timeRange_valid").remove();
      $("#dynamicNext").removeAttr("disabled");
      $('.validdation_time').remove();
    });

    $(".clearTimeRange").click(function(e){
      $('.startTime').val('');
      $('.endTime').val('');
      $('.mainTime').css('opacity','1').css('pointer-events','all');
      $("#dynamicNext").attr("disabled", "disabled");
      $('.validdation_time').remove();
    });
}

function componentIncidentAddressForm(data, properties, lastQuestion) {	
	currentQuestion.elementId = "option" + data["question"]["id"];
	var answerJson = lastQuestion != null ? lastQuestion.currentQuestion.answerJson : "";
	var building = answerJson != "" ? answerJson.address.building: "";
	var landmark = answerJson != "" ? answerJson.address.landmark: "";
	var area = answerJson != "" ? answerJson.address.area: "";
	var city = answerJson != "" ? answerJson.address.city: "";
	var state = answerJson != "" ? answerJson.address.state: "";
	var country = answerJson != "" ? answerJson.address.country: "";
	var latitude = answerJson != "" ? answerJson.address.latitude: "";
	var longitude = answerJson != "" ? answerJson.address.longitude: "";
	var elementHtml = `
		<div class="form-group">
		  <label class="themeColor">Building, Locality, Street name</label>
		  <input type="text" class="form-control locality" id="option${data["question"]["id"]}building" name="option${data["question"]["id"]}building" placeholder="Write here" value="${building}">
		</div>
		<span class="localityInfo"></span>
		<div class="form-group">
		  <label class="themeColor">Landmark</label>
		  <input type="text" class="form-control landmark" id="option${data["question"]["id"]}landmark" name="option${data["question"]["id"]}landmark" placeholder="Write here" value="${landmark}">
		</div>
		<span class="landmarkInfo"></span>
		<div class="row">
		  	<div class="col-md-6 col-sm-12 col-xs-12">
				<div class="form-group">
				  <label class="themeColor">Area/Suburb<span class="error">*</span></label>
				  <input type="text" class="form-control suburb" id="option${data["question"]["id"]}area" name="option${data["question"]["id"]}area" placeholder="Write here" value="${area}">
				</div>
				<span class="suburbInfo"></span>
			</div>
			<div class="col-md-6 col-sm-12 col-xs-12">
				<div class="form-group">
				  <label class="themeColor">City<span class="error">*</span></label>
				  <input type="text" class="form-control city" id="option${data["question"]["id"]}city" name="option${data["question"]["id"]}city" placeholder="Write here" value="${city}">
				</div>
				<span class="cityInfo"></span>
			</div>
		</div>
		<div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12">
				<div class="form-group">
			  		<label class="themeColor">State<span class="error">*</span></label>
			  		<input type="text" class="form-control state" id="option${data["question"]["id"]}state" name="option${data["question"]["id"]}state" placeholder="Write here" value="${state}">
				</div>
				<span class="stateInfo"></span>
			</div>
			<div class="col-md-6 col-sm-12 col-xs-12">
				<div class="form-group">
				  <label class="themeColor">Country<span class="error">*</span></label>
				  <input type="text" class="form-control country" id="option${data["question"]["id"]}country" name="option${data["question"]["id"]}country" placeholder="Write here" value="${country}">
				</div>
				<span class="countryInfo"></span>
			</div>
			<input type="hidden" id="option${data["question"]["id"]}latitude" name="option${data["question"]["id"]}latitude" value="${latitude}">
			<input type="hidden" id="option${data["question"]["id"]}longitude" name="option${data["question"]["id"]}longitude" value="${longitude}">
		</div>
		<div class="noteColor mt-3 mb-3">
		  <label>An exact location will help us identify patterns of violence across the city.</label>
		</div>
	`;
	$("#options").html(elementHtml);
	//$(".locality").focus();
	$("#options input:text").eq(0).focus();
	
	$("#dynamicNext").removeAttr("disabled");

	$(".suburb").keyup(function(e){
		$('.validdation_suburb').remove();
		if (($(".suburb").val()) != "") {
			$('.validdation_suburb').remove();
			$("#dynamicNext").removeAttr("disabled");
		}
		else {
			$('.suburb').after('<div class="validdation_suburb" style="color:red;">'+properties.validations[0]["message"]+'</div>');
			$("#dynamicNext").attr("disabled", "disabled");
		}
    });

    $(".city").keyup(function(e){
    	$('.validdation_city').remove();
		if (($(".city").val()) != "") {
			$('.validdation_city').remove();
			$("#dynamicNext").removeAttr("disabled");
		}
		else {
			$('.city').after('<div class="validdation_city" style="color:red;">'+properties.validations[0]["message"]+'</div>');
			$("#dynamicNext").attr("disabled", "disabled");
		}
    });

    $(".state").keyup(function(e){
    	$('.validdation_state').remove();
		if (($(".state").val()) != "") {
			$('.validdation_state').remove();
			$("#dynamicNext").removeAttr("disabled");
		}
		else {
			$('.state').after('<div class="validdation_state" style="color:red;">'+properties.validations[0]["message"]+'</div>');
			$("#dynamicNext").attr("disabled", "disabled");
		}
    });

    $(".country").keyup(function(e){
    	$('.validdation_country').remove();
		if (($(".country").val()) != "") {
			$('.validdation_country').remove();
			$("#dynamicNext").removeAttr("disabled");
		}
		else {
			$('.country').after('<div class="validdation_country" style="color:red;">'+properties.validations[0]["message"]+'</div>');
			$("#dynamicNext").attr("disabled", "disabled");
			
		}
    });

    // Enable autocomplete
    if(google){
    	initAutoComplete('option'+data["question"]["id"]);
    }
}

function initAutoComplete(elementInitial) {
	// Create the autocomplete object, restricting the search predictions to
    // geographical location types.
    var autocomplete = new google.maps.places.Autocomplete(
      // document.getElementById('autocomplete').getElementsByTagName('input')[0],
      document.getElementById(elementInitial+'building'),
      { types: ["geocode"] ,componentRestrictions: {country: 'in'}}
    );
    
    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components.
    autocomplete.setFields(["address_component", "geometry"]);
  
    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
    autocomplete.addListener("place_changed", function() {
        var  place = autocomplete.getPlace();
        var latitude  = place.geometry.location.lat();
        var longitude = place.geometry.location.lng();
        document.getElementById(elementInitial+'latitude').value  = latitude;
        document.getElementById(elementInitial+'longitude').value = longitude;
        
        var addcomponent = place.address_components;
        for(var i = 0 ; i < addcomponent.length ; i++)
        {
            if(addcomponent[i].types[0] == 'country') {
              document.getElementById(elementInitial+'country').value = addcomponent[i].long_name;
            }
            else if(addcomponent[i].types[0] == 'locality') {
              document.getElementById(elementInitial+'city').value = addcomponent[i].long_name;
            }
            else if(addcomponent[i].types[0] == 'administrative_area_level_1') {
              document.getElementById(elementInitial+'state').value = addcomponent[i].long_name;
            }
            else if(addcomponent[i].types[0] == 'sublocality_level_1') {
              document.getElementById(elementInitial+'area').value = addcomponent[i].long_name;
            }
            else if(addcomponent[i].types[0] == 'sublocality_level_2') {
              document.getElementById(elementInitial+'building').value = addcomponent[i].long_name;
            }
            else if(addcomponent[i].types[0] ==  'postal_code') {
              document.getElementById(elementInitial+'landmark').value = addcomponent[i].long_name;
            }
        }

    });
}

function componentIncidentPinMap(data, lastQuestion) {
	currentQuestion.elementId = "option" + data["question"]["id"];
	var isAccepted = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.isAccepted: false;
	var latitude = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.location.latitude: '';
	var longitude = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.location.longitude: '';
	if(latitude=='' || longitude=='') {
		var prevAnsAdd = selectedAnswers[selectedAnswers.length-1].currentQuestion.answerJson.address;
		latitude = prevAnsAdd.latitude;
		longitude = prevAnsAdd.longitude;
	}

	var elementHtml = `
		<div class="text-left">
		  <div class="mapouter">
		  </div>
		</div>
		<div class="custom-control custom-checkbox estimate">
		  <input type="checkbox" name="option${data["question"]["id"]}checked" class="custom-control-input estimate map_estimate" id="estimate" ${isAccepted?'checked':''} >
		  <label class="custom-control-label eLabel" for="estimate">This information is true to my knowledge</label>
		</div>
		<input type="hidden" id="option${data["question"]["id"]}latitude" name="option${data["question"]["id"]}latitude" value="${latitude}">
		<input type="hidden" id="option${data["question"]["id"]}longitude" name="option${data["question"]["id"]}longitude" value="${longitude}">
	`;
	$("#options").html(elementHtml);

	var location = new google.maps.LatLng(latitude, longitude);
  	var options = {
	    center: location,
	    zoom: 15,
	    animation: 'DROP',
	    draggable:true,
	    // disableDefaultUI: true,
	    scaleControl: true,
	    fullscreenControl: false,
	    scaleControl: true,
	    // Disable Zoom and pan
	    gestureHandling: 'none',
	    minZoom: 17,
	    maxZoom: 22
	    //zoomControl: false
	};

	// Set map
	var map = new google.maps.Map(document.getElementsByClassName("mapouter")[0], options);

	// Set Marker
	var mapMarker = new google.maps.Marker({
                        position: location,
                        // title: marker.title,
                        latitude: latitude,
                        longitude: longitude,
                        animation: 'DROP',
                        draggable:true, 
                    });
	mapMarker.setMap(map);

	// On drag end
	google.maps.event.addListener(mapMarker, 'dragend', function() {
		var markerlatlong = mapMarker.getPosition();
		var lat= JSON.stringify(mapMarker.getPosition().lat());
		var lng = JSON.stringify(mapMarker.getPosition().lng());
		$("option"+data["question"]["id"]+"latitude").val(lat);
		$("option"+data["question"]["id"]+"longitude").val(lng);
		console.log(lat, lng);
	});
}