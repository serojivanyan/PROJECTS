import { Component, OnInit,OnDestroy } from '@angular/core';
import {Http,  RequestOptions, Headers} from '@angular/http';

import { FacebookService, InitParams,LoginResponse } from 'ngx-facebook';
// import { HttpService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[]
})
export class DashboardComponent implements OnInit  {
	data ={
		"suggestion": "",
		"description": "",
	};
	results: string[];
	constructor(private http: Http){
	
	}
	url = "http://localhost:3000/posts";
	
	
	createpost(a,b){
		
		this.data.suggestion=b;
		this.data.description=b;
		
		
		console.log(this.data);	
		this.http.post(this.url,this.data).subscribe(data => {
			this.data = data['data'];
			console.log(data)
		});
		err => {
			console.log('Something went wrong!');
		  };

		  
		
	
	}
	getPost(id){
		 //  let headers = new Headers({ 'Content-Type': 'application/json' });
   // 		    let options = new RequestOptions({ headers: headers });
			// var sug=document.getElementById("sug");
			// this.http.get("http://localhost:3000/users")
		 //    .subscribe( 
		 //    (err) => {
		 //        if(err) console.log(err);
		 //        console.log("Success"); 
		 //    });
		 var sug1 = document.getElementById("sug1");
		
		 this.http.get('http://localhost:3000/posts/59d4cb239f148d1be09bc930').subscribe(post => {
      	// Read the result field from the JSON response.
        // this.results = data['results'];
          // this.sug.innerHTML=post["suggestion"];

        console.log(post);
        console.log("htpp get ");
        sug1.innerHTML = post["suggestion"];

         });
	  	
   
  }
	

	ngOnInit(){
		
	}


	opendropdown(){
		var options=document.getElementById("options");
		if (options.style.display == "block") {
			options.style.display = "none";
		}
		else {
			
			options.style.display = "block";
			options.setAttribute('class', 'dropdown card open');
		}
		
}
}