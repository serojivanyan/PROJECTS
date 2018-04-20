import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {UsersService } from "./users.service";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
// import {Http} from '@angular/http';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
   
 
    HttpModule
    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { };
