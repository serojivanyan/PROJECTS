import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { ConnectionBackend } from '@angular/http';

@Injectable()
export class UsersService {

  constructor(public http: Http) {}

addNew(usercreds) {

  var headers = new Headers();
        var creds = 'name=' + usercreds.name+ '&email=' + usercreds.email+'&telephone=' + usercreds.telephone+'&message=' + usercreds.message;
      
        
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        
        this.http.post('http://localhost:5000/sendmail', creds, {headers: headers}).subscribe((data) => {
            // if(data.json().success) {
            //     this.http.post('http://localhost:5000/sendmail', email, {headers: headers}).subscribe((data) => {
            if(data.json().success) {
              console.log('Sent successfully');
            }
         })
       }
    // })
  }        
// }