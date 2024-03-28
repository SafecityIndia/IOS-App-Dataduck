$(function () {
	// Hide all blocks at start
	if (country_id == 0) $("#cityblock").hide();
	if (city_id == 0) $("#organizationradioblock").hide();
	$("#oraganisationblock").hide();
	$("#languageblock").hide();

	// On organization change
	$("input[name=is_organization]").click(function (event) {
		var is_organization = $("input[name=is_organization]:checked").val();
		if (
			is_organization == "1" &&
			$("#oraganisationblock").css("display") == "none"
		) {
			hideLanguageBlock();
			disableProceedButton();
			$("#oraganisationblock").show();
		} else if (
			is_organization == "0" &&
			($("#oraganisationblock").css("display") != "none" ||
				$("#languageblock").css("display") == "none")
		) {
			client_id = 1;
			hideOrganizationBlock();
			hideLanguageBlock();
			disableProceedButton();
			$("#languageblock").show();
		}
	});

	$("#org_done").click(function (event) {
		event.preventDefault();
		// Reset passcode error message
		$("#varification_code").siblings(".text-danger").html("");
		var verification_code = $("#varification_code").val();
		// Check for code validity
		$.ajax({
			url: baseUrl + "api/organization/verify-passcode",
			type: "POST",
			data: { id: organization_id, passcode: verification_code },
		})
			.done(function (response) {
				console.log("success");
				if (response.is_valid) {
					$("#org_varification").modal("hide");
					$("#languageblock").show();
				} else {
					// Set passcode error message
					$("#varification_code")
						.siblings(".text-danger")
						.html("Invalid passcode entered!");
				}
			})
			.fail(function () {
				console.log("error");
			})
			.always(function () {
				console.log("complete");
			});
	});

	/** On submit/complete */
	$("#proceed_btn").click(function (event) {
		event.preventDefault();
		if (client_id > 0 && language_id > 0) {
			$.cookie("country_id", country_id);
			$.cookie("city_id", city_id);
			$.cookie("client_id", client_id);
			$.cookie("language_id", language_id);
			window.location.href = baseUrl + "shareIncident";
		} else {
			alert("Please select all fields properly to proceed!");
		}
	});

	/** Autocompletes */
	$("#autocomplete-country").typeahead({
		autoSelect: true,
		highlight: true,
		hint: true,
		displayText: function (item) {
			return item.country_name;
		},
		afterSelect: function (item) {
			this.$element[0].value = item.country_name;
			country_id = item.country_id;
			$("#country_id").val(item.country_id);
			// Reset Corresponding UI
			hideCityBlock();
			$("#cityblock").show();
			hideIsOrganizationBlock();
			hideOrganizationBlock();
			hideLanguageBlock();
			disableProceedButton();
		},
		source: function (query, process) {
			$.ajax({
				url: baseUrl + "home/getCountryAutocomplete",
				data: { query: query },
				dataType: "json",
				type: "POST",
				success: function (data) {
					process(data);
				},
			});
		},
	});

	$("#autocomplete-country").change(function(event) {
		console.log('in country changed');
		var current = $(this).typeahead("getActive");
		console.log(current);
		if(!current || current.country_name!=$(this).val()) {
			// Nothing is active so it is a new value (or maybe empty value)
			hideCityBlock();
			hideIsOrganizationBlock();
			hideOrganizationBlock();
			hideLanguageBlock();
			disableProceedButton();
		}
	});

	$("#autocomplete-city").typeahead({
		autoSelect: true,
		highlight: true,
		hint: true,
		displayText: function (item) {
			return item.city_name;
		},
		afterSelect: function (item) {
			console.log('fired!');
			this.$element[0].value = item.city_name;
			$("#city_id").val(item.id);
			city_id = item.id;
			client_id = item.client_id;

			// Reset Corresponding UI
			hideIsOrganizationBlock();
			$("#organizationradioblock").show();
			hideOrganizationBlock();
			hideLanguageBlock();
			disableProceedButton();
		},
		source: function (query, process) {
			$.ajax({
				url: baseUrl + "api/get-cities-autocomplete",
				data: { query: query, country_id: country_id },
				dataType: "json",
				type: "POST",
				success: function (data) {
					if (data.status == true) process(data.data);
					else process([]);
				},
			});
		},
	});

	$("#autocomplete-city").change(function(event) {
		var current = $(this).typeahead("getActive");
		if(!current || current.city_name!=$(this).val()) {
			// Nothing is active so it is a new value (or maybe empty value)
			hideIsOrganizationBlock();
			hideOrganizationBlock();
			hideLanguageBlock();
			disableProceedButton();
		}
	});

	$("#autocomplete-organization").typeahead({
		autoSelect: true,
		highlight: true,
		hint: true,
		displayText: function (item) {
			return item.name;
		},
		afterSelect: function (item) {
			this.$element[0].value = item.name;
			$("#organization_id").val(item.id);
			organization_id = item.id;
			client_id = item.client_id;
			// Reset Corresponding UI
			hideLanguageBlock();
			disableProceedButton();
			if (item.has_passcode == "1") $("#org_varification").modal("show");
			else $("#languageblock").show();
		},
		source: function (query, process) {
			$.ajax({
				url: baseUrl + "api/get-organizations-autocomplete",
				data: {
					query: query,
					country_id: country_id,
					city_id: city_id,
				},
				dataType: "json",
				type: "POST",
				success: function (data) {
					if (data.status == true) process(data.data);
					else process([]);
				},
			});
		},
	});

	$("#autocomplete-language").typeahead({
		autoSelect: true,
		highlight: true,
		hint: true,
		displayText: function (item) {
			return item.name;
		},
		afterSelect: function (item) {
			this.$element[0].value = item.name;
			$("#language_id").val(item.id);
			language_id = item.id;
			enableProceedButton();
		},
		source: function (query, process) {
			$.ajax({
				url: baseUrl + "api/get-languages-autocomplete",
				data: { query: query, client_id: client_id },
				dataType: "json",
				type: "POST",
				success: function (data) {
					if (data.status == true) process(data.data);
					else process([]);
				},
			});
		},
	});

	/** Set Visibilities */
	function hideCityBlock() {
		city_id = 0;
		client_id = 1;
		$("#cityblock").hide();
		$("#autocomplete-city").val("");
		$("#city_id").val("");
	}

	function hideIsOrganizationBlock() {
		$("#organizationradioblock").hide();
		$("input[name=is_organization]").prop("checked", false);
	}

	function hideOrganizationBlock() {
		organization_id = 0;
		$("#oraganisationblock").hide();
		$("#autocomplete-organization").val("");
		$("#organization_id").val("");
	}

	function hideLanguageBlock() {
		language_id = 0;
		$("#languageblock").hide();
		$("#autocomplete-language").val("");
		$("#language_id").val("");
	}

	function enableProceedButton() {
		$("#proceed_btn").addClass("purple-btn");
		$("#proceed_btn").removeAttr("disabled");
	}

	function disableProceedButton() {
		$("#proceed_btn").removeClass("purple-btn");
		$("#proceed_btn").attr("disabled", "disabled");
	}
});
