
import { Component } from '@angular/core';
import {UsersService} from './users.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  newUser= {
    name:"",
    telephone:"",
    email: '',
    message: ''
  }
  
  constructor(private userservice: UsersService) {}
  

  addCategorie(modal){
    modal.style.display="block"
    }
  addUser(data) {
    console.log(data)
    this.newUser.name=data["name"];
  this.newUser.telephone = data["telephone"];
  this.newUser.email=data["email"];
  this.newUser.message = data["message"];
    this.userservice.addNew(this.newUser);
  }

  cancel(modal){
   
    modal.style.display="none"
  }
  cancelStopProp(e){
e.stopPropagation();
  }
}