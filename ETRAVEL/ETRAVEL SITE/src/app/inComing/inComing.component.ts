import { Component, OnInit } from '@angular/core';
import {DataService} from '../service'
import {SafeUrl } from '@angular/platform-browser'
import {Router} from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-inComing',
  templateUrl: './inComing.component.html',
  styleUrls: ['./inComing.component.css']
})
export class InComingComponent implements OnInit {

  constructor(public dataservice:DataService,public router:Router,private location: Location) { }
  arr;
  newUser= {
    name:"",
    telephone:"",
    email: '',
    message: '',
    tourName:''
  };
  isget:boolean=true;
  langTour="en";
  x:any={
    about_us:"About Us",
    armenian:"Armenian",
    cargo : "Cargo",
    about : "About",
    english: "English",
    incoming_tours:  "Incoming Tours",
    russian : "Russian",
    upcoming_tours : "Outgoing Tours",
    news:"News",
    aboutArmenia:"About Armenia",
    hotOffers:"Hot Offers",
    fcomment: 'Comment',
    ftel: 'Telephone',
    fname: 'Name',
    cancel: 'Cancel',
    order: 'Order'
  }
  lang=JSON.parse(localStorage.getItem("lang"));
  aboutBack(){
    this.location.back()
  }
  ngOnInit() {
    console.log(this.lang)
  
        
    this.x=JSON.parse(localStorage.getItem("x"))
    console.log(this.x)
    
    document.getElementById("appCont").innerHTML=this.x.contact;
    document.getElementById("appCont1").innerHTML=this.x.contact;
    document.getElementById("appInc").innerHTML=this.x.incoming_tours;
    document.getElementById("appUp").innerHTML=this.x.upcoming_tours;
    document.getElementById("appNews").innerHTML=this.x.news;
    document.getElementById("appCarg").innerHTML=this.x.cargo;
    document.getElementById("appCarg1").innerHTML=this.x.cargo;
    document.getElementById("appoff1").innerHTML=this.x.about_us;
    document.getElementById("appoff").innerHTML=this.x.about_us;

    document.getElementById("appCont2").innerHTML=this.x.contact;
    
  this.dataservice.getIncomingTour().subscribe(
  data=>  { 
    console.log(data)
           this.arr=data;
           this.arr.reverse();
  this.isget=false;
          if (this.router.url=="/ru/incoming"){
            this.langTour="ru"
            document.getElementById("dropdownLang1").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
                       document.getElementById("dropdownLang2").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
                       document.getElementById("dropdownLang3").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
           
                       document.getElementById("dropdownLang4").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
                       document.getElementById("dropdownLang5").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
                       document.getElementById("dropdownLang6").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
           
          
            }
                        
         else if (this.router.url=="/arm/incoming"){
           
            document.getElementById("dropdownLang2").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
                       document.getElementById("dropdownLang1").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
                       document.getElementById("dropdownLang3").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
           
                       document.getElementById("dropdownLang5").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
                       document.getElementById("dropdownLang4").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
                       document.getElementById("dropdownLang6").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
                       this.langTour="arm"
          
            }
                        
        else  if (this.router.url=="/en/incoming"){
           
            document.getElementById("dropdownLang2").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
                       document.getElementById("dropdownLang3").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
                       document.getElementById("dropdownLang1").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
           
                       document.getElementById("dropdownLang5").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
                       document.getElementById("dropdownLang6").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
                       document.getElementById("dropdownLang4").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
                       this.langTour="en"
          
            }
    console.log(this.langTour)
            },

  error => {  
          console.log(error);}
  )
  
if (localStorage.getItem("path")=="/ru"){
  this.langTour="ru"
  document.getElementById("dropdownLang1").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
      document.getElementById("dropdownLang2").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
      document.getElementById("dropdownLang3").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
  
      document.getElementById("dropdownLang4").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
      document.getElementById("dropdownLang5").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
      document.getElementById("dropdownLang6").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
  
  
  }
       
  if (localStorage.getItem("path")=="/arm"){
  this.langTour="arm"
  document.getElementById("dropdownLang2").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
      document.getElementById("dropdownLang1").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
      document.getElementById("dropdownLang3").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
  
      document.getElementById("dropdownLang5").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
      document.getElementById("dropdownLang4").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
      document.getElementById("dropdownLang6").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
  
  
  }
       
  if (localStorage.getItem("path")=="/en"){
  this.langTour="en"
  document.getElementById("dropdownLang2").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
      document.getElementById("dropdownLang3").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
      document.getElementById("dropdownLang1").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
  
      document.getElementById("dropdownLang5").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
      document.getElementById("dropdownLang6").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
      document.getElementById("dropdownLang4").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
  
  
  }
  }

  addCategorie(modal){
    modal.style.display="block"
    }
  addUser(data,modal,item) {
    console.log(data)
    this.newUser.name=data["name"];
  this.newUser.telephone = data["telephone"];
  this.newUser.email=data["email"];
  this.newUser.message = data["message"];
  this.newUser.tourName = item.text.en.title;
    this.dataservice.addNew(this.newUser,modal);
  }

  cancel(modal){
   
    modal.style.display="none"
  }
  cancelStopProp(e){
e.stopPropagation();
  }

}
