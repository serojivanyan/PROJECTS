import { Component , ViewChild} from '@angular/core';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';
import {Http,  RequestOptions, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	openAccountSetting:boolean = false;
	userIdRes: string = "sd";
	str:boolean = false;
	url = "http://localhost:3000/posts";


  constructor( private fb: FacebookService,private http: Http){

  fb.init({
	appId: '356878531406171',
	version: 'v2.10',
  });
  }

  loginWithOptions() {
	
		const loginOptions: LoginOptions = {
		  enable_profile_selector: true,
		  return_scopes: true,
		  scope: 'public_profile,user_friends,email,pages_show_list'
		};
		
		this.fb.login(loginOptions)
		  .then((res: LoginResponse) => {
			console.log('Logged in', res); 
		
				// handle the response
		
			
			this.fb.api('/me?fields=name,email')
		  .then((res: any) => {
			console.log('Got the users profile', res);
			localStorage.setItem("id", res.id);
			localStorage.setItem("name", res.name);
			localStorage.setItem("email", res.email);

			// this.http.post(this.url,JSON.stringify(res)).subscribe();
			let headers = new Headers({ 'Content-Type': 'application/json' });
   		    let options = new RequestOptions({ headers: headers });

		    console.log(this.userIdRes);

		    this.http.post("http://localhost:3000/users", res, options)
		    .subscribe( 
		    (err) => {
		        if(err) console.log(err);
		        console.log("Success"); 
		    });
  
			err => {
				console.log('Something went wrong!');
				}

			this.str = true;
			
			this.userIdRes =localStorage.getItem("id");
			
							})
		  
		
		  })
		 
			.catch(this.handleError);
	  }
	

	ngOnInit() {
		let localId = localStorage.getItem("id");
		if(localId){
				this.str = true;
			this.userIdRes = localId;
			
			
		}
  
	}

   private handleError(error) {
	 console.error('Error processing action', error);
   }
 

   overUserImage(){
	this.openAccountSetting = true;
}

outoverUserImage(){
	this.openAccountSetting = false;
}


logout(){
	localStorage.removeItem("id");
	localStorage.removeItem("name");
	
	location.reload()
}

 }
 

