var addressFormField = (function() {

	function nextClick() {

		var properties = JSON.parse(currentQuestion.properties);
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

		// Save and proceed
		saveCurrentAnswer(answer_id, answerJson);
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
	
	return function(data, properties, lastQuestion) {	
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
					  <input disabled type="text" class="form-control suburb" id="option${data["question"]["id"]}area" name="option${data["question"]["id"]}area" placeholder="Write here" value="${area}">
					</div>
					<span class="suburbInfo"></span>
				</div>
				<div class="col-md-6 col-sm-12 col-xs-12">
					<div class="form-group">
					  <label class="themeColor">City<span class="error">*</span></label>
					  <input disabled type="text" class="form-control city" id="option${data["question"]["id"]}city" name="option${data["question"]["id"]}city" placeholder="Write here" value="${city}">
					</div>
					<span class="cityInfo"></span>
				</div>
			</div>
			<div class="row">
	            <div class="col-md-6 col-sm-12 col-xs-12">
					<div class="form-group">
				  		<label class="themeColor">State<span class="error">*</span></label>
				  		<input disabled type="text" class="form-control state" id="option${data["question"]["id"]}state" name="option${data["question"]["id"]}state" placeholder="Write here" value="${state}">
					</div>
					<span class="stateInfo"></span>
				</div>
				<div class="col-md-6 col-sm-12 col-xs-12">
					<div class="form-group">
					  <label class="themeColor">Country<span class="error">*</span></label>
					  <input disabled type="text" class="form-control country" id="option${data["question"]["id"]}country" name="option${data["question"]["id"]}country" placeholder="Write here" value="${country}">
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

	    // Add new event listener
	    $("#dynamicNext").off('click').click(function(event) {
	    	event.preventDefault();
	    	nextClick();
	    });
	}

})();
