import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { MessagesComponent } from './messages/messages.component';
import { CitiesComponent } from './cities/cities.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    MessagesComponent,
    CitiesComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpClientModule,
  HttpModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
