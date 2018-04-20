import { Component, OnInit } from '@angular/core';
import {DataService} from '../service'
import { Input, Output } from '@angular/core/src/metadata/directives';
import { AppComponent } from '../app.component';
import {Router,NavigationExtras} from '@angular/router'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
    order: 'Order',    email:'E-mail',
    address:'Address'
  }
  constructor(private dataservice:DataService,private appcomponent:AppComponent, public router:Router) {
    
   }
   isget:boolean=true;

   langTour;
  arrOffers;
  arrOfferOne;
  public zang: [{langId: '', name: '', value: ''}]
 
  // @Output() val:string;
  private valuee;
 
  detail(obj){
    console.log(obj);
    obj["lang"]=this.langTour
    let navigationExtras: NavigationExtras = {
      queryParams: {result:JSON.stringify(obj)}
  };
  console.log(navigationExtras)
  this.router.navigate([this.router.url+"/detail"], navigationExtras);
  }

  ngOnInit() {
    let lang={
      en:"English",
      arm:"Հայերեն",
      ru:"Русский"
    }
    localStorage.setItem("path",this.router.url)
    localStorage.setItem("lang",JSON.stringify(lang))
    console.log("hi dashboard");
  //   console.log(this.x)
  //   this.dataservice.getLang(this.router.url).subscribe(
  //     data=>  {;
  //     this.x=data[0].value},
  //     error => {  console.log(error);}
  // );
  
  this.dataservice.getLang(this.router.url).subscribe(
    data=>  { 
      console.log(data)
             this.x=data;
             localStorage.setItem("x",JSON.stringify(this.x))
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
       
              },

    error => {  
            console.log(error);
          }
    )
    this.dataservice.getOffersDashboard().subscribe(

      res => {
        this.isget=false;
            this.arrOffers=res;
           this.arrOfferOne=this.arrOffers[0];
              this.arrOffers.shift();
        console.log(this.arrOffers)
      }
    )
  
  }

}
