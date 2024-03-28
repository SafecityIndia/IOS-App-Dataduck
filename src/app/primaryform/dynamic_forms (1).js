var incident_id = 0;
var currentQuestion = "";
var currentParentKey = 0;
var currentTreeOptions = [];
var selectedAnswers = [];
var dynamicQuestionJson = {};
var currentForm = 0;
var dependedQuestionsAnswers = {};

$(document).ready(function () {

	intiateForm();

	$("#dynamicNext").click(function (event) {

		// Set answers
		setAnswers(function(answer_id) {
			if (currentTreeOptions.length == 0) {
				// Goto next parent if exists
				showNextParentQuestion();
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
		console.log("back clicked");
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

			// Has form changed back
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

function setAnswers(callback) {
	var properties = JSON.parse(currentQuestion.properties);
	if (properties.type == "radio") {
		var answer_id = $(
			"input[name=" + currentQuestion.elementId + "]:checked"
		).val();

		var other_answers = {};
		if($("input[name=" + currentQuestion.elementId + "]:checked").data('showtextbox')==true) {
			other_answers[answer_id] = $("input[name=option"+answer_id+"textbox").val();
		}
		var answerJson = {
			"option_id": answer_id,
			"other_answers": other_answers,
			"answer": ""
		};
	} else if (properties.type == "text") {
		var answer_id = 0;
		var answer = $("#" + currentQuestion.elementId).val();
		var answerJson = {
			"option_id": answer_id,
			"answer": answer
		};
	} else if (properties.type == "checkbox") {
		var answer_id  = '';
		var other_answers = {};
		var parent_answer_arr = [];
		$("input[name=" + currentQuestion.elementId + "]:checked").each(function(index, el) {
			answer_id += ','+$(this).val();
			var parent_id = $(this).data('parentid');
			if($(this).data('showtextbox')==true) {
				other_answers[$(this).val()] = $("input[name=option"+$(this).val()+"textbox").val();
			}

			parent_id = parent_id==0 || parent_id==undefined?parseInt($(this).val()):parent_id;
			if(!parent_answer_arr.includes(parent_id))
				parent_answer_arr.push(parent_id);
		});

		answer_id = answer_id.replace(',', '');
		parent_answer_id = parent_answer_arr.sort().join(',');
		var answerJson = {
			"option_id": answer_id,
			"other_answers": other_answers,
			"parent_option_id": parent_answer_id,
			"answer": ""
		};

		if(currentQuestion.has_logic_dependency=="1") {
			dependedQuestionsAnswers[currentQuestion.id] = {
				"answers": answer_id,
				"parent_answers": parent_answer_id
			};
		}
	} else if(properties.type == "estimate-datepicker") {
		var answer_id = 0;
		var answer = $("input[name="+currentQuestion.elementId+"]").val();
		var isEstimate = $("input[name="+currentQuestion.elementId+"checked]").is(':checked');
		var answerJson = {
			"option_id": answer_id,
			"answer": answer,
			"isEstimate": isEstimate
		};
	} else if(properties.type == "estimate-time-or-rangepicker") {
		var answer_id = 0;
		var answer = $("input[name="+currentQuestion.elementId+"]").val();
		var isEstimate = $("input[name="+currentQuestion.elementId+"checked]").is(':checked');
		console.log(isEstimate);
		if(answer=="") {
			var timeStart = $("input[name="+currentQuestion.elementId+"start]").val();
			var timeEnd   = $("input[name="+currentQuestion.elementId+"end]").val();
			answer = timeStart+'-'+timeEnd;
			isEstimate = true;
		}
		var answerJson = {	
			"option_id": answer_id,
			"answer": answer,
			"isEstimate": isEstimate
		};
	} else if(properties.type == "incident-address-form") {
		var answer_id = 0;
		var building = $("input[name="+currentQuestion.elementId+"building]").val();
		var landmark = $("input[name="+currentQuestion.elementId+"landmark]").val();
		var area = $("input[name="+currentQuestion.elementId+"area]").val();
		var city = $("input[name="+currentQuestion.elementId+"city]").val();
		var state = $("input[name="+currentQuestion.elementId+"state]").val();
		var country = $("input[name="+currentQuestion.elementId+"country]").val();
		var answerJson = {
			"option_id": answer_id,
			"answer": "",
			"address": {
				"building": building, 
				"landmark": landmark, 
				"area": area, 
				"city": city, 
				"state": state, 
				"country": country
			}
		};
	} else if(properties.type == "incident-pin-map") {
		var answer_id = 0;
		var isAccepted = $("input[name="+currentQuestion.elementId+"checked]").is(':checked');
		var answerJson = {
			"option_id": 0,
			"answer": "",
			"isAccepted": isAccepted
		};
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
		if(form.depends_on_main_cats) {
			var dependent_answers = dependedQuestionsAnswers[form.depends_on_question]["parent_answers"];
		} else {
			var dependent_answers = dependedQuestionsAnswers[form.depends_on_question]["answers"];
		}
		// make a ajax call to get combination json data
		$.ajax({
			url: baseURL+'get-logical-questions',
			type: 'POST',
			data: {form_id: form.id, question_id:form.depends_on_question, ans_ids: dependent_answers},
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
			incident_id = 0;

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
				thankyouJson.links.forEach(function(link) {
					if(link.is_next)
						links += '<a href="#" class="btn w-50 btn_purple mb-4 dynamic-thankyou-next">'+link.title+'</a>';
					else {
						var redirect_url = link.redirect_url!=undefined?baseURL+link.redirect_url:'#';
						links += '<a href="'+redirect_url+'" class="btn w-50 btn_p_white dynamic-thankyou-end">'+link.title+'</a>';
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
			} else {
				// continue with the form recursion
				showNextForm();
			}
		} else {
			// continue with the form recursion
			showNextForm();
		}
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
			componentIncidentAddressForm(data, lastQuestion);
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
	var answer =
		lastQuestion != null ? lastQuestion.currentQuestion.answerJson.answer : "";
	currentQuestion.elementId = "option" + data["question"]["id"];
	var elementHtml = `<input type="text" id="option${data["question"]["id"]}" class="form-control inputBox getAge" name="option${data["question"]["id"]}" placeholder="${properties.placeholder}" value="${answer}" >`;
	$("#options").html(elementHtml);
}

function componentRadio(data, lastQuestion) {
	var selectedAnswerId =
		lastQuestion != null ? lastQuestion.currentQuestion.answerJson.option_id : null;
	currentQuestion.elementId = "option" + data["question"]["id"];

	var optionHtml = "";
	data["options"].forEach(function (option) {
		var showTextbox = option.textbox_placeholder!=null;
		optionHtml += `
			<div class="inputGroup custom-control">
			  <input type="radio" id="${option.id}" name="option${
			data["question"]["id"]
		}" class="custom-control-input dynamic-radio" value="${option.id}" ${
			option.id == selectedAnswerId ? "checked" : ""
		} data-showtextbox="${showTextbox}">
			  <label class="custom-control-label label1" for="${option.id}">${
			option.title
		}</label>
			</div>
		`;
		if(showTextbox) {
			var otheranswers =  selectedAnswerId!=null?lastQuestion.currentQuestion.answerJson.other_answers:null;
			var othertextval = otheranswers!=null && otheranswers[option.id]!=undefined?otheranswers[option.id]:"";
			optionHtml += `
			<input type="text" class="form-control input1 specifyBox1 dynamic-radio-textbox ${option.id == selectedAnswerId?"":"d-none"}" name="option${option.id}textbox" placeholder="${option.textbox_placeholder}" value="${othertextval}">
			`;
		}
	});
	$("#options").html(optionHtml);

	$(".dynamic-radio").click(function(event) {
		$(".dynamic-radio-textbox").addClass('d-none');
		if($(this).data('showtextbox')==true) {
			var optionid = $(this).attr('id');
			if($(this).is(':checked')) {
				console.log('show a textbox F');
				$("input[name=option"+optionid+"textbox").removeClass('d-none');
			} else {
				console.log('hide a textbox F');
				$("input[name=option"+optionid+"textbox").addClass('d-none');
			}
		}
	});
}

function componentCheckbox(data, lastQuestion) {
	var selectedAnswerId =
		lastQuestion != null ? lastQuestion.currentQuestion.answerJson.option_id : null;
	var selectedAnswerArr = selectedAnswerId==null?[]:selectedAnswerId.split(',');
	currentQuestion.elementId = "option" + data["question"]["id"];
	var elementHtml = `<div class="row"><div class="col-md-6">`;
	var i = 0;
	data["options"].forEach(function (option) {
		var showTextbox = option.textbox_placeholder!=null;
		var isSelected = selectedAnswerArr.includes(option.id);
		elementHtml += `
			<div class="inputGroup custom-control">
			  <input type="checkbox" id="${option.id}" data-id="1"  name="option${data["question"]["id"]}" class="custom-control-input getAttr dynamic-checkbox" value="${option.id}" data-parentid="${option.parent_id}" data-val="Domestic Violence" data-showtextbox="${showTextbox}" ${isSelected?"checked":""}>
			  <label class="custom-control-label label1" for="${option.id}">${option.title}</label>
			</div>
		`;
		if(showTextbox) {
			var otheranswers =  selectedAnswerId!=null?lastQuestion.currentQuestion.answerJson.other_answers:null;
			var othertextval = otheranswers!=null && otheranswers[option.id]!=undefined?otheranswers[option.id]:"";
			elementHtml += `
			<input type="text" class="form-control input1 specifyBox1 ${isSelected?"":"d-none"}" name="option${option.id}textbox" placeholder="${option.textbox_placeholder}" value="${othertextval}">
			`;
		}
	});
	elementHtml += `</div></div>`;
	$("#options").html(elementHtml);

	$(".dynamic-checkbox").click(function(event) {
		if($(this).data('showtextbox')==true) {
			var optionid = $(this).attr('id');
			if($(this).is(':checked')) {
				console.log('show a textbox F');
				$("input[name=option"+optionid+"textbox").removeClass('d-none');
			} else {
				console.log('hide a textbox F');
				$("input[name=option"+optionid+"textbox").addClass('d-none');
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
	elementHtml = `<div class="input-group date selectDate" id="datetimepicker" data-target-input="nearest">
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
	                    <div class="col-md-8">
	                      <div class="input-group date selectTime" id="timepicker" data-target-input="nearest">
	                        <input type="text" class="form-control datetimepicker-input timepicker" name="option${data["question"]["id"]}" data-target="#timepicker" value=""/>
	                        <div class="input-group-append timePick" data-target="#timepicker" data-toggle="datetimepicker">
	                          <div class="input-group-text">
	                            <img src="assets/images/timer.png" class="img-fluid">
	                          </div>
	                        </div>
	                      </div>
	                    </div>
	                    <div class="col-md-4">
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
		} else if(selectedStarTime!="" && selectedEndTime!="") {
      		$('.mainTime').css('opacity','0.2').css('pointer-events','none');
		}

        // Hide/show other picker based on selections
        $(".timePick").click(function(e){
          $('.startTime').val('');
          $('.endTime').val('');
          $('.timeRange').css('opacity','0.2').css('pointer-events','none');
        });

        $(".clearTime").click(function(e){
          $('.timepicker').val('');
          $('.estimate1').prop('checked',false);
          $('.timeRange').css('opacity','1').css('pointer-events','all');
        });

        $(".rangeTime").click(function(e){
          $('.timepicker').val('');
          $('.estimate1').prop('checked',false);
          $('.mainTime').css('opacity','0.2').css('pointer-events','none');
        });

        $(".clearTimeRange").click(function(e){
          $('.startTime').val('');
          $('.endTime').val('');
          $('.mainTime').css('opacity','1').css('pointer-events','all');
        });
}

function componentIncidentAddressForm(data, lastQuestion) {
	currentQuestion.elementId = "option" + data["question"]["id"];
	var answerJson = lastQuestion != null ? lastQuestion.currentQuestion.answerJson : "";
	var building = answerJson != "" ? answerJson.address.building: "";
	var landmark = answerJson != "" ? answerJson.address.landmark: "";
	var area = answerJson != "" ? answerJson.address.area: "";
	var city = answerJson != "" ? answerJson.address.city: "";
	var state = answerJson != "" ? answerJson.address.state: "";
	var country = answerJson != "" ? answerJson.address.country: "";
	var elementHtml = `
		<div class="form-group">
		  <label>Building, Locality, Street name</label>
		  <input type="text" class="form-control locality" name="option${data["question"]["id"]}building" placeholder="Write here" value="${building}">
		</div>
		<span class="localityInfo"></span>
		<div class="form-group">
		  <label>Landmark</label>
		  <input type="text" class="form-control landmark" name="option${data["question"]["id"]}landmark" placeholder="Write here" value="${landmark}">
		</div>
		<span class="landmarkInfo"></span>
		<div class="form-group">
		  <label>Area/Suburb<span class="error">*</span></label>
		  <input type="text" class="form-control suburb" name="option${data["question"]["id"]}area" placeholder="Write here" value="${area}">
		</div>
		<span class="suburbInfo"></span>
		<div class="form-group">
		  <label>City<span class="error">*</span></label>
		  <input type="text" class="form-control city" name="option${data["question"]["id"]}city" placeholder="Write here" value="${city}">
		</div>
		<span class="cityInfo"></span>
		<div class="form-group">
		  <label>State<span class="error">*</span></label>
		  <input type="text" class="form-control state" name="option${data["question"]["id"]}state" placeholder="Write here" value="${state}">
		</div>
		<span class="stateInfo"></span>
		<div class="form-group">
		  <label>Country<span class="error">*</span></label>
		  <input type="text" class="form-control country" name="option${data["question"]["id"]}country" placeholder="Write here" value="${country}">
		</div>
		<span class="countryInfo"></span>
		<div class="noteColor">
		  <label>An exact location will help us identify patterns of violence across the city.</label>
		</div>
	`;
	$("#options").html(elementHtml);
}

function componentIncidentPinMap(data, lastQuestion) {
	currentQuestion.elementId = "option" + data["question"]["id"];
	var isAccepted = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.isAccepted: false;
	var elementHtml = `
		<div class="text-left">
		  <div class="mapouter">
		  </div>
		</div>
		<div class="custom-control custom-checkbox estimate">
		  <input type="checkbox" name="option${data["question"]["id"]}checked" class="custom-control-input estimate map_estimate" id="estimate" ${isAccepted?'checked':''} >
		  <label class="custom-control-label eLabel" for="estimate">This information is true to my knowledge</label>
		</div>
	`;
	$("#options").html(elementHtml);

	// Set map
	var append_html = '<div class="gmap_canvas"> <iframe width="450" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=kharghar&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe> </div> ';
	$('.mapouter').append(append_html);
}