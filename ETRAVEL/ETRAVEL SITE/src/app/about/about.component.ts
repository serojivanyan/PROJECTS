import { Component, OnInit } from '@angular/core';
import {DataService} from '../service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private dataservice:DataService,public router:Router) { }
text;
langTour="en";
  ngOnInit() {
this.dataservice.getAbout().subscribe(
  data=>  { 
    console.log(data)
    if (this.router.url=="/ru/about"){
      this.langTour="ru"
      document.getElementById("dropdownLang1").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
                 document.getElementById("dropdownLang2").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
                 document.getElementById("dropdownLang3").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
     
                 document.getElementById("dropdownLang4").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
                 document.getElementById("dropdownLang5").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
                 document.getElementById("dropdownLang6").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
     
    
      }
                  
   else if (this.router.url=="/arm/about"){
     
      document.getElementById("dropdownLang2").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
                 document.getElementById("dropdownLang1").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
                 document.getElementById("dropdownLang3").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
     
                 document.getElementById("dropdownLang5").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
                 document.getElementById("dropdownLang4").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
                 document.getElementById("dropdownLang6").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
                 this.langTour="arm"
    
      }
                  
  else  if (this.router.url=="/en/about"){
     
      document.getElementById("dropdownLang2").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
                 document.getElementById("dropdownLang3").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
                 document.getElementById("dropdownLang1").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
     
                 document.getElementById("dropdownLang5").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
                 document.getElementById("dropdownLang6").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
                 document.getElementById("dropdownLang4").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
                 this.langTour="en"
    
      }
   
           this.text=data;
  },
 
  error => {
    console.log(error)
  })
  }
}
