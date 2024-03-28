var radioField = (function() {

	function nextClick() {
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
		var selectedSubOptionRadio = $("input[name=suboption" + answer_id + "radio]:checked");
		if(selectedSubOptionRadio.length>0) {
			subanswer_ids += ','+$("input[name=suboption" + answer_id + "radio]:checked").val();
			answer += ','+$("input[name=suboption" + answer_id + "radio]:checked").data('val');
		}

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

		// Save and proceed
		saveCurrentAnswer(answer_id, answerJson);
	}

	return function(data, lastQuestion) {
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

		// Add new event listener
		$("#dynamicNext").off('click').click(function(event) {
			event.preventDefault();
			nextClick();
		});
	}
	
})();