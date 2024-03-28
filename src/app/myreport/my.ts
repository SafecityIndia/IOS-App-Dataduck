import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Router,NavigationExtras } from '@angular/router';
import {SharedService} from '../shared.service'
@Component({
  selector: 'app-myreport',
  templateUrl: './myreport.page.html',
  styleUrls: ['./myreport.page.scss'],
})
export class MyreportPage implements OnInit {
incident_list

  constructor(private navController: NavController,private sharedservice : SharedService, private router: Router) { 
    let data = new FormData();  
    data.append('user_id',localStorage.getItem('userId'));

    this.sharedservice.sharedPostRequest_webappurl('user-reported-incidents',data).subscribe((rdata: any) => {
      console.log(rdata);
      this.incident_list = rdata.data
      console.log(this.incident_list)

      for (var i=0; i<this.incident_list.length; i++) {
        var incidentdata = data['data'] != null ? data['data'][i] : "";
        console.log(incidentdata)
        var incident_desc = this.incident_list[i].description != null ? this.incident_list[i].description : "";

        this.incident_list[i].incident_desc_show = incident_desc

        var additional_info = this.incident_list[i].additional_detail != null ? 'Additional Details : '+this.incident_list[i].additional_detail : "";
        this.incident_list[i].additional_info_show = additional_info
        // code changed by sonam - 16-10-2020 start
        var person_age = this.incident_list[i].age != null ? this.incident_list[i].age+' Yrs' : "";
        console.log(person_age)
        this.incident_list[i].person_age_show = person_age
        // code changed by sonam - 16-10-2020 end
    
        var person_gender = this.incident_list[i].gender != null && this.incident_list[i].gender!="Prefer not to say" ? this.incident_list[i].gender : "";
    console.log(person_gender)
    this.incident_list[i].person_gender_show = '' 
    if(person_gender)
    {
      this.incident_list[i].person_gender_show = '| ' + person_gender

    }
    
        // code changed by sonam - 16-10-2020 start
        var incidents_date_est = this.incident_list[i].is_date_estimate != "0" ? "Around " : "On";
        this.incident_list[i].incidents_date_est_show = incidents_date_est
        var incidents_time_est = this.incident_list[i].is_time_estimate != "0" ? "Around " : "At";
        this.incident_list[i].incidents_time_est_show = incidents_time_est
        var incidents_time_est = this.incident_list[i].time_to != null ? "Between " : incidents_time_est;
        this.incident_list[i].incidents_time_est_show = incidents_time_est
        // code changed by sonam - 16-10-2020 end
    
        // code changed by sonam - 20-10-2020 start
        var incidents_date = this.incident_list[i].incident_date != null ? this.incident_list[i].incident_date : "";
        console.log('incidents_date',incidents_date)
        this.incident_list[i].converttolongdate_show = this.ConverttoLongDate(incidents_date)
        var incidents_time_range = this.incident_list[i].time_to != null ? this.timeConvert(this.incident_list[i].time_from)+" - "+this.timeConvert(this.incident_list[i].time_to) : this.incident_list[i].time_from;
        var dayBetween = this.days_between(incidents_date);
        var getDaysAgo = (dayBetween > 7 ? this.ChangeDateFormat(incidents_date,1)+' '+incidents_time_range : (dayBetween==0) ? 'Today' : (dayBetween==1) ? dayBetween+" day ago" : dayBetween+" days ago");

        this.incident_list[i].getDaysAgo_show = getDaysAgo

        // code changed by sonam - 20-10-2020 end
        
        //var incidents_time = incidentdata.time_from != null ? incidentdata.time_from : "";
        var incidents_time = this.incident_list[i].time_to != null ? this.incident_list[i].time_from+" To "+this.incident_list[i].time_to : this.incident_list[i].time_from;
        console.log(incidents_time)
        if(incidents_time)
        {
          this.incident_list[i].timeconvert_show = this.timeConvert(incidents_time)
        }
        
        var incidents_area = this.incident_list[i].area != null ? this.incident_list[i].area : "";

        this.incident_list[i].incidents_area_show = incidents_area

        var incidents_city = this.incident_list[i].city != null ? this.incident_list[i].city : "";
        this.incident_list[i].incidents_city_show = incidents_city
        var incidents_state = this.incident_list[i].state != null ? this.incident_list[i].state : "";
        this.incident_list[i].incidents_state_show = incidents_state
        var incidents_categories = this.incident_list[i].categories != null ? this.incident_list[i].categories : "";
        this.incident_list[i].incidents_categories_show = incidents_categories
        var incidentdata_answers = this.incident_list[i].answers != null ? this.incident_list[i].answers : "";
        var incidentdata_answers_length = incidentdata_answers.length;
    
        for (var j=0; j<incidentdata_answers_length; j++) {
          //console.log("incidentdata_answers");
          var incident_question_tag = incidentdata_answers[j].question_tag != null ? incidentdata_answers[j].question_tag : "";
          var incident_question_answer = incidentdata_answers[j].answer != null ? incidentdata_answers[j].answer : "";
          var incident_question_answer_id = incidentdata_answers[j].answer_id != null ? incidentdata_answers[j].answer_id : "";
    
          if (incident_question_tag == "attack_reason") {
            var attack_reason = 'What led to the attack : '+incident_question_answer;
            this.incident_list[i].attack_reason_show = attack_reason
          }else if (incident_question_tag == "who_was_perpetrator") {
            var perpetrator_info = incident_question_answer;
            console.log('perpetrator_info',perpetrator_info)
            this.incident_list[i].perpetrator_info_show = perpetrator_info
          }
          else if (incident_question_tag == "medical_help") {
            var medical_help_desc = (incident_question_answer_id == 28 ? 'Medical Help Received' : 'Medical Help Not Received');
            var medical_help = medical_help_desc;
            this.incident_list[i].medical_help_show = medical_help
          }
          else if (incident_question_tag == "reported_to_police") {
            // code change by sonam - 16-10-2020 start
            var incident_other_answer
            if(incidentdata_answers[j].other_answers.length != 2){
                 incident_other_answer = JSON.parse(incidentdata_answers[j].other_answers)[42] != null ? JSON.parse(incidentdata_answers[j].other_answers)[42] : "";
            }
            var policeHtml = '<img src="assets/images/map-police.svg" class="img-fluid"> ';
            var reported_to_police = '';
            if(incident_question_answer_id == 38){
                reported_to_police = ' Police report filed.';
                this.incident_list[i].reported_to_police_show = reported_to_police
            } else if(incident_question_answer_id == 41){
                reported_to_police = ' Police report not filed.';
                this.incident_list[i].reported_to_police_show = reported_to_police
            } else if(incident_question_answer_id == 42){
                reported_to_police = ' Tried to file police report. '+incident_other_answer;
                this.incident_list[i].reported_to_police_show = reported_to_police
            } else if(incident_question_answer_id == 39){
                reported_to_police = ' Intend to file police report.';
                this.incident_list[i].reported_to_police_show = reported_to_police
            } else if(incident_question_answer_id == 40){
                reported_to_police = ' Not sure about filing police report.';
                this.incident_list[i].reported_to_police_show = reported_to_police
            } else {
                reported_to_police = '';
                this.incident_list[i].reported_to_police_show = reported_to_police
            }
            // code change by sonam - 16-10-2020 end
          }
        }

        
    
       // latlong[i] = {"city":incidents_city, "area":incidents_area, "latitude":incidentdata.latitude, "longitude":incidentdata.longitude, "categories":incidents_categories, "dateTime":incidents_time};
    
        // elementHtml += `
        //     <!-- Short Desc Start -->
        //     <div class="text shortDesc " data-id="${i}">
        //       <div class="incident-title">${incidents_categories}</div>
        //       <div class="place-time">
        //         at ${incidents_area} <span class="sepration">.</span> ${getDaysAgo}
        //       </div>
        //       <div class="text1">
        //         <span class="ellipsis">${incident_desc}</span>
        //         <span>
        //           <button class="themeColor toggleThis readbtn mb-3 ml-1" id="readbtn_${i}" data-id="${i}">Read More</button>
        //         </span>
        //       </div>
        //     </div>
        //     <!-- Short Desc End -->
        //     <!-- Long Desc Start -->
        //     <div class="longDesc" id="longDesc_${i}" data-id="${i}">
        //       <button class="toggleUp shwobtn" id="toggleUp_${i}" data-id="${i}">
        //         <img src="assets/images/icon-feather-arrow-left.svg" class="img-fluid leftIcon">
        //       </button>
        //       <div class="incident-title">${incidents_categories}</div>
        //       <label>
        //         <span class="age">${person_age}</span>
        //         ${person_gender}
        //       </label>
        //       <p>${incident_desc}</p><br>
        //       ${perpetrator_info}<br>
        //       ${attack_reason}<br>
        //       ${additional_info}<br>
        //       <div class="otherDetails">
        //         <div class="row mb-3">
        //           <div class="col-md-12">
        //             <div class="location">
        //                 ${reported_to_police}
        //             </div>
        //           </div>
        //         </div>
        //         <div class="row mb-3">
        //           <div class="col-md-12">
        //             <div class="location">
        //                 ${medical_help}
        //             </div>
        //           </div>
        //         </div>
        //         <div class="row mb-3">
        //           <div class="col-md-12">
        //             <div class="location">
        //               <img src="assets/images/location.svg" class="img-fluid">
        //               ${incidents_area},${incidents_city}
        //             </div>
        //           </div>
        //         </div>
        //         <div class="row mb-3">
        //           <div class="col-md-12">
        //             <div class="iDate">
        //               <img src="assets/images/calendar-date-of-incident.svg" class="img-fluid">
        //               ${incidents_date_est} ${ConverttoLongDate(incidents_date)}
        //             </div>
        //           </div>
        //         </div>
        //         <div class="row mb-3">
        //           <div class="col-md-12">
        //             <div class="iTime">
        //               <img src="assets/images/time-of-incident.svg" class="img-fluid"> ${incidents_time_est} ${timeConvert(incidents_time)}
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //     <!-- Long Desc End -->
        // `;
      }
      console.log(this.incident_list)

     }, error => {
    });
  }

  ngOnInit() {
  }
  
    
   share() {
this.navController.navigateForward(`/preframingtwo`);
  }
  
  report(item) {
    console.log(item)
    
    let navigationExtras: NavigationExtras = {
      state: {
        data : item
      }
    };

    this.router.navigate(['/myviewreport'], navigationExtras);
//this.navController.navigateForward(`/myviewreport`);
  }

   ChangeDateFormat(date,val){
    var dayDate = new Date(date);
  
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthNames[dayDate.getMonth()];
    var monthVal = (val==1 ? monthName.substr(0, 3) : monthName);
    var getDate = dayDate.getDate();
    var getYear = dayDate.getFullYear();
  
    var format_date = getDate+" "+monthVal+" "+getYear;
    return format_date;
  }
  
   ConverttoLongDate(date) {
    var dayDate = new Date(date);
  
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var mainDate = weekday[dayDate.getDay()];
  
    var dateFormat = this.ChangeDateFormat(date,0);
  
    var format_date = mainDate+", "+dateFormat;
    return format_date;
  }
  
   days_between(date) {
      // The number of milliseconds in one day
      var date1 : any 
      date1 = new Date(date);
      var todays_date  : any
      todays_date= new Date();
      const ONE_DAY = 1000 * 60 * 60 * 24;
  
      // Calculate the difference in milliseconds

      const differenceMs = Math.abs(todays_date - date1);
      var daydiff = Math.round(differenceMs / ONE_DAY);
      return daydiff;
 // return 0
      // Convert back to days and return
      /*if (daydiff >= 0 && daydiff <= 30) {
        // return daydiff + " Days ago";
        return daydiff;
      }
      else {
        return date;
      }*/
  }
  
   timeConvert(time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }
  

}
