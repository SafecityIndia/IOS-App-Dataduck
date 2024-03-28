<?php
defined('BASEPATH') or exit('No direct script access allowed');
$this->load->view('../includes/header');
?>

<body class="bgColor"> 

  	<div class="covering my-auto">

      	<div class="container">
            <div class="text mx-auto" style="width: 62%;">
              <div class="questionaire">
                <form>
                
                  <ul class="progress-form">
                  
                    <div class="Step1">
                        <a id="dynamicBack" href="javascript:void(0);" class="pull-left animated fadeInUp show_one"><img src="assets/images/icon-feather-arrow-left.svg" class="img-fluid leftIcon"></a>
                   
                      <!-- Dynamic questions start -->
                      <li class="form-group animated fadeInUp activate selected singleColumn" data-color="#7C6992" data-percentage="100%">
                        <label>
                          <span id="question_span"><!-- Placeholder for dynamic questions --></span><span class="error">*</span><br>
                          <span class="themeColor" id="subtext_span"><!-- Placeholder for dynamic sub text --></span>
                        </label>                  

                        <div id="options">
                        	<!-- Placeholder for dynamic options -->
                        </div>

                        <span class="sharingForInfo"></span>
                      </li>
                      <!-- Dynamic questions end -->
 
                    </div>

                  </ul>

                </form>
              
               <button id="dynamicNext" class="btn btn-primary nxt_btn animated nextPage fadeInUp pull-right mt-4">Next <span class="glyphicon glyphicon-chevron-down"></span></button>                

              </div> <!-- //questionaire -->
              <div class="thankyou-section" style="display:none">
                <div class="container">
                  <div class="text mx-auto" style="width: 58%;">
                    <h4 class="mb-4 text-center textColor dynamic-success-title">Thank you for submitting your report!</h4>
                    <div class="text-center">
                      <img src="assets/images/thank-you-check.png" class="img-fluid checkIcon">
                    </div>

                    <div class="text mb-5 dynamic-success-content">
                      <p>By sharing your experience with us, you are helping prevent 3 others from experiencing something similar.</p>

                      <p>If you have 5-10 minutes, we would like to know more about the incident to understand other factors that play a role in sexual violence. By answering a few questions, you will help us build safer cities.</p>        
                    </div>

                    <div class="text-center mt-4 dynamic-success-link">                  
                      <a href="#" class="btn w-50 btn_purple mb-4">YES, I WANT TO HELP</a>
                      <a href="home" class="btn w-50 btn_p_white">NO, I WOULD LIKE TO EXIT</a>
                    </div>

                  </div>
                </div>
              </div>
            </div> <!-- //text mx-auto -->

        </div>

          <div class="count float-right">
            <h5 class="progress-text">0% Completed </h5>
            <div class="progress">
              <div class="progress-bar" style="width: 10%;"> </div>
            </div>
          </div>

          <div class="clearfix"></div>
  	</div>
 
	<?php $this->load->view('../includes/footer'); ?>

  <script src="https://maps.google.com/maps/api/js?key=AIzaSyA-RG4hM7qRh3jHfOwSuUOBexPTn0CZf6w&libraries=geometry,places" async defer></script>
	<script src="application/modules/report_incident/scripts/dynamic_forms.js"></script>
 
  	<script type="text/javascript">
  		var baseURL = "<?php echo base_url() ?>";
  		var clientForms = <?php echo $forms ?>;
  		var dynamicQuestionOptionJson = <?php echo $questions ?>;
      var categories = <?php echo $categories ?>;
  	</script>

</body>

</html>
