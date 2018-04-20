import { Injectable } from '@angular/core';
import {  Http,Headers } from "@angular/http";
import { HttpClient} from '@angular/common/http';
import {Router} from '@angular/router'
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";


@Injectable()

export class DataService{
    
  constructor(public http: HttpClient, public router:Router,public Http:Http) {
    console.log('Hello service');
  }
  url ="http://e-travel.am"
  
getLang(router){
  
 
    // let headers = new Headers();
    // headers.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
     if (this.router.url=="/"){
       console.log(this.router.url)
      return this.http.get(this.url + "/en")
      
     } 
    return this.http.get(this.url+this.router.url)
     
    }
    getIncomingTour(){
      return this.http.get(this.url+this.router.url)

    }
    getUpcomingTour(){
      return this.http.get(this.url+this.router.url)

    }
    getCargo(){
      return this.http.get(this.url+this.router.url)

    }
    getNews(){
      return this.http.get(this.url+this.router.url)

    }
    getAbout(){
      return this.http.get(this.url+"/about")

    }
    getOffers(){
      return this.http.get(this.url+this.router.url)
    }
    getOffersDashboard(){
      return this.http.get(this.url+this.router.url+"/offers")
    }
    getArmenia(){
      return this.http.get(this.url+this.router.url)

    }

addNew(usercreds,modal) {

  var headers = new Headers();
        var creds = 'name=' + usercreds.name+ '&email=' + usercreds.email+'&telephone=' + usercreds.telephone+'&message=' + usercreds.message+'&tourName=' + usercreds.tourName;
      
        
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        
        this.Http.post(this.url+"/sendmail", creds, {headers: headers}).subscribe((data) => {
            // if(data.json().success) {
            //     this.http.post('http://localhost:5000/sendmail', email, {headers: headers}).subscribe((data) => {
            if(data.json().success) {
              console.log('Sent successfully');
              modal.style.display="none"
            }
         })
       }
       
Send(usercreds) {

  var headers = new Headers();
        var creds = 'name=' + usercreds.name+ '&email=' + usercreds.email+'&telephone=' + usercreds.telephone+'&message=' + usercreds.message;
      
        
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        
        this.Http.post(this.url+"/sendmail", creds, {headers: headers}).subscribe((data) => {
            // if(data.json().success) {
            //     this.http.post('http://localhost:5000/sendmail', email, {headers: headers}).subscribe((data) => {
            if(data.json().success) {
              alert('Sent successfully');
            }
         })
       }
    // })
  } 


