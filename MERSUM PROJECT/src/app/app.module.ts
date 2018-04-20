import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ServicesComponent } from './services/services.component';
import { TopComponent } from './top/top.component';
import { SalonsComponent } from './salons/salons.component';
import { SingleComponent } from './single/single.component';
import { SupertopComponent } from './supertop/supertop.component';
import { OneComponent } from './one/one.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // AboutComponent,
    // ServicesComponent,
    TopComponent,
    SalonsComponent,
    SingleComponent,
    SupertopComponent,
    OneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '',pathMatch: "full", redirectTo: "top" },
      { path: "top", component: TopComponent },
      { path: "supertop", component: SupertopComponent },
      { path: "salons", component: SalonsComponent },
      { path: "single", component: SingleComponent },
      { path: "one", component: OneComponent },
      // { path: "home", component: HomeComponent },
      // { path: "about", component: AboutComponent },
      // { path: "services", component: ServicesComponent },
    
  ]),],
   providers: [
        
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
