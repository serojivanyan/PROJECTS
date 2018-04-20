import { Component, OnInit } from '@angular/core';
import { DataService } from '../service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
x;

  constructor(private dataservice:DataService, private router:Router) { }
  newUser= {
    name:"",
    telephone:"",
    email: '',
    message: '',
    
  };
  ngOnInit() {
   
       
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
    
    if (localStorage.getItem("path")=="/ru"){
      document.getElementById("dropdownLang1").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
          document.getElementById("dropdownLang2").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
          document.getElementById("dropdownLang3").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
      
          document.getElementById("dropdownLang4").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
          document.getElementById("dropdownLang5").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
          document.getElementById("dropdownLang6").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
      
      
      }
           
      if (localStorage.getItem("path")=="/arm"){
      document.getElementById("dropdownLang2").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
          document.getElementById("dropdownLang1").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
          document.getElementById("dropdownLang3").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
      
          document.getElementById("dropdownLang5").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
          document.getElementById("dropdownLang4").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
          document.getElementById("dropdownLang6").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
      
      
      }
           
      if (localStorage.getItem("path")=="/en"){
      document.getElementById("dropdownLang2").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
          document.getElementById("dropdownLang3").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
          document.getElementById("dropdownLang1").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
      
          document.getElementById("dropdownLang5").innerHTML=JSON.parse(localStorage.getItem("lang")).ru;
          document.getElementById("dropdownLang6").innerHTML=JSON.parse(localStorage.getItem("lang")).arm;
          document.getElementById("dropdownLang4").innerHTML=JSON.parse(localStorage.getItem("lang")).en;
      
      
      }
  }
  addUser(data) {
    console.log(data)
    this.newUser.name=data["name"];
  this.newUser.telephone = data["telephone"];
  this.newUser.email=data["email"];
  this.newUser.message = data["message"];
    this.dataservice.Send(this.newUser);
  }

  cancel(modal){
   
    modal.style.display="none"
  }
}
