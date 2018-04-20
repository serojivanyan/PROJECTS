import { Component, HostListener , OnInit} from '@angular/core';
import {DataService} from './service';
import {Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  path="/";
defLang;
 
  postdata={
    lang:localStorage.getItem("path")
  }
  text={
    contact: '',

  };
  
  lang1="";
  lang2="";
  lang3="";

  x:any={about_us:"About Us",
    armenian:"Armenian",
    cargo : "Cargo",
    contact : "Contact",
    english: "English",
    incoming_tours:  "Incoming Tours",
    russian : "Russian",
    upcoming_tours : "Outgoing Tours",
    hotOffers:"Hot Offers",
    aboutArmenia:"About Armenia",
    news:"News",
    fcomment: 'Comment',
    ftel: 'Telephone',
    fname: 'Name',
    cancel: 'Cancel',
    order: 'Order',
    email:'E-mail',
    address:'Address'
  }
  constructor(public router: Router,private dataservice:DataService) {
   
  // this.dataservice.getLang(this.router.url).subscribe(
  //   data=>  { 
  //     console.log(data)
  //            this.x=data;
  //             },

  //   error => {  
  //           console.log(error);}
  //   )

  }
  


@HostListener('window:scroll', ['$event']) onScrollEvent($event){

  var header = document.getElementById("sticky-wrap");
  var header1 = document.getElementById("sticky-wrap2");
  if (window.pageYOffset >= 20) {
    header.classList.add("stickyhead");
    header1.classList.add("stickyhead2");
    
  } else{
    header.classList.remove("stickyhead");
    header1.classList.remove("stickyhead2");
    
  }
  
}

changeLang1(){
  var a=  document.getElementById("dropdownLang1").innerHTML;
   document.getElementById("dropdownLang1").innerHTML= document.getElementById("dropdownLang2").innerHTML;
   document.getElementById("dropdownLang2").innerHTML=a;
   if (document.getElementById("dropdownLang1").innerHTML=="Русский"){
     this.router.navigate(['/ru']);
     this.postdata.lang="/ru";
    this.lang1=JSON.parse(localStorage.getItem("lang")).ru;
    this.lang2=JSON.parse(localStorage.getItem("lang")).en;
  
    
   }
   else   if (document.getElementById("dropdownLang1").innerHTML=="Հայերեն"){
    //  if (this.router.url=="/en"){
     this.router.navigate(['/arm']);
    //  }
    //  else{
    //   this.router.navigate([this.router.url]);
    //  }
     this.postdata.lang="/arm";
  
    this.lang2="English";
    this.lang1="Հայերեն";
   }
   else   if (document.getElementById("dropdownLang1").innerHTML=="English"){
     
     this.router.navigate(['/en']);
     this.postdata.lang="/en";
     this.lang2="Русский";
    this.lang1="English";
  
   }
   console.log(this.postdata.lang)
   this.path=this.postdata.lang;
   this.dataservice.getLang(this.postdata.lang).subscribe(
         data=>  {;
           console.log(data)
           
           this.x=data,

         error => {  console.log(error);}
         })
         localStorage.setItem("x",JSON.stringify(this.x))
 }
  changeLang2(){
  var a=  document.getElementById("dropdownLang1").innerHTML;
   document.getElementById("dropdownLang1").innerHTML= document.getElementById("dropdownLang3").innerHTML;
   document.getElementById("dropdownLang3").innerHTML=a;
   if (document.getElementById("dropdownLang1").innerHTML=="Русский"){
     this.router.navigate(['/ru']);
     this.postdata.lang="/ru";
     this.lang1="Русский";
     
     this.lang3="Հայերեն";
   }
   else   if (document.getElementById("dropdownLang1").innerHTML=="Հայերեն"){
     
     this.router.navigate(['/arm']);
     this.postdata.lang="/arm";
   
     this.lang3="English";
     this.lang1="Հայերեն";
   }
   else   if (document.getElementById("dropdownLang1").innerHTML=="English" ){
     
     this.router.navigate(['/en']);
     this.postdata.lang="/en";
    
     this.lang1="English";
     this.lang3="Հայերեն";
   }
   this.path=this.postdata.lang;

   this.dataservice.getLang(this.postdata.lang).subscribe(
     data=>  {;
       this.x=data,

     error => {  console.log(error);}
     })
     localStorage.setItem("x",JSON.stringify(this.x))
    }
  changeLang3(){
  var a=  document.getElementById("dropdownLang4").innerHTML;
   document.getElementById("dropdownLang4").innerHTML= document.getElementById("dropdownLang5").innerHTML;
   document.getElementById("dropdownLang5").innerHTML=a;
   if (document.getElementById("dropdownLang4").innerHTML=="Русский"){
    this.router.navigate(['/ru']);
    this.postdata.lang="/ru";
   this.lang1="Русский";
   this.lang2="English";
 
   
  }
  else   if (document.getElementById("dropdownLang4").innerHTML=="Հայերեն"){
    
    this.router.navigate(['/arm']);
    this.postdata.lang="/arm";
 
   this.lang2="English";
   this.lang1="Հայերեն";
  }
  else   if (document.getElementById("dropdownLang4").innerHTML=="English"){
    
    this.router.navigate(['/en']);
    this.postdata.lang="/en";
    this.lang2="Русский";
   this.lang1="English";
 
  }
   this.path=this.postdata.lang;

   this.dataservice.getLang(this.postdata.lang).subscribe(
     data=>  {;
       this.x=data;


     error => {  console.log(error);}
     })
     localStorage.setItem("x",JSON.stringify(this.x))
    }
 
  changeLang4(){
  var a=  document.getElementById("dropdownLang4").innerHTML;
   document.getElementById("dropdownLang4").innerHTML= document.getElementById("dropdownLang6").innerHTML;
   document.getElementById("dropdownLang6").innerHTML=a;
     if (document.getElementById("dropdownLang4").innerHTML=="Русский"){
     this.router.navigate(['/ru']);
     this.postdata.lang="/ru";
     this.lang1="Русский";
     
     this.lang3="Հայերեն";
   }
   else   if (document.getElementById("dropdownLang4").innerHTML=="Հայերեն"){
     
     this.router.navigate(['/arm']);
     this.postdata.lang="/arm";
   
     this.lang3="English";
     this.lang1="Հայերեն";
   }
   else   if (document.getElementById("dropdownLang4").innerHTML=="English" ){
     
     this.router.navigate(['/en']);
     this.postdata.lang="/en";
    
     this.lang1="English";
     this.lang3="Հայերեն";
   }
   this.path=this.postdata.lang;

   this.dataservice.getLang(this.postdata.lang).subscribe(
     data=>  {;
       this.x=data;
    
     error => {  console.log(error);}
     })
     localStorage.setItem("x",JSON.stringify(this.x))
    }


ngOnInit() {

  console.log("hi");
 
if (!localStorage.getItem("path")){
  let lang={
    en:"English",
    arm:"Հայերեն",
    ru:"Русский"
  }
  localStorage.setItem("lang",JSON.stringify(lang))
  this.path="/en"
  localStorage.setItem("path", this.path)
  this.lang1=JSON.parse(localStorage.getItem("lang")).en;
  this.lang2=JSON.parse(localStorage.getItem("lang")).ru;
  this.lang3=JSON.parse(localStorage.getItem("lang")).arm;
  // this.dataservice.getLang(this.postdata.lang.split("/")[1]).subscribe(
  //   data=>  {;
  //     this.x=data;
   
  //   error => {  console.log(error);}
  //   })
    localStorage.setItem("x",JSON.stringify(this.x));

    console.log(this.x)
   }
   this.path=localStorage.getItem("path")
   this.x=JSON.parse(localStorage.getItem("x"))
   this.defLang=this.path.split("/")[1]
 
}
    




}
