import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './service'
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { InComingComponent } from './inComing/inComing.component';
import { UpComingComponent } from './upComing/upComing.component';
import { CargoComponent } from './cargo/cargo.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import {SafeHtml} from './safe.pipe';
import { OffersComponent } from './offers/offers.component';
import { OffersDetailComponent } from './offers-detail/offers-detail.component';
import { AboutArmeniaComponent } from './about-armenia/about-armenia.component'
import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactComponent,
    InComingComponent,
    UpComingComponent,
    CargoComponent,
    AboutComponent,
    NewsComponent,
    SafeHtml,
    OffersComponent,
    OffersDetailComponent,
    AboutArmeniaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', pathMatch: "full", redirectTo: "en" },
      { path: "en", component: DashboardComponent },
      { path: "ru", component: DashboardComponent },
      { path: "arm", component: DashboardComponent },
      { path: "arm/about", component: AboutComponent },
      { path: "ru/about", component: AboutComponent },
      { path: "en/about", component: AboutComponent },
      { path: "arm/contact", component: ContactComponent },
      { path: "ru/contact", component: ContactComponent },
      { path: "en/contact", component: ContactComponent },
      { path: "arm/news", component: NewsComponent },
      { path: "ru/news", component: NewsComponent },
      { path: "en/news", component: NewsComponent },
      
      { path: "en/armenia/incoming", component: InComingComponent },
      { path: "ru/armenia/incoming", component: InComingComponent },
      { path: "arm/armenia/incoming", component: InComingComponent },
      { path: "en/armenia", component: AboutArmeniaComponent },
      { path: "ru/armenia", component:AboutArmeniaComponent },
      { path: "arm/armenia", component: AboutArmeniaComponent },
      { path: "en/offers", component: OffersComponent },
      { path: "ru/offers", component: OffersComponent },
      { path: "arm/offers", component: OffersComponent },
      { path: "en/upcoming", component: UpComingComponent },
      { path: "ru/upcoming", component: UpComingComponent },
      { path: "arm/upcoming", component: UpComingComponent },
      { path: "en/cargo", component: CargoComponent },
      { path: "arm/cargo", component: CargoComponent },
      { path: "ru/cargo", component: CargoComponent },
      { path: "en/detail", component: OffersDetailComponent },
      { path: "arm/detail", component: OffersDetailComponent },
      { path: "ru/detail", component: OffersDetailComponent },


    ]),    FormsModule,
    HttpClientModule,
   
 
    HttpModule
  ],
  providers: [
    DataService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
