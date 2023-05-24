
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroisComponent } from './herois/herois.component';
import { DetallComponent } from './detall/detall.component';
import { MisatgesComponent } from './misatges/misatges.component';
import { AppRoutingModule } from './app-routing.module';
import { TaulerComponent } from './tauler/tauler.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroisComponent,
    DetallComponent,
    MisatgesComponent,
    TaulerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    //HttpClientInMemoyWebApiModule.forRoot(InMemoryDataService. { dataEcapsulation: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

