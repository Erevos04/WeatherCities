import { Component, OnInit, Input, onChanges } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
@Input() selectedUrl: string;

weatherData: Weather[];

maxTempm: number;
minTempm: number;
maxHumidity: number;
totalPrecipm: number;
date: string;

getWeatherData(): void {
  this.weatherService.getWeatherData(this.selectedUrl)
  .subscribe(weatherData => {
    this.date = weatherData.history.date.pretty;
    this.weatherData = weatherData.history.observations;
    this.maxTempm = Math.max(...this.weatherData.map(obs => parseInt(obs.tempm)));
    this.minTempm = Math.min(...this.weatherData.map(obs => parseInt(obs.tempm)));
    this.maxHumidity = Math.max(...this.weatherData.map(obs => parseInt(obs.hum)));
    this.totalPrecipm = this.weatherData.map(obs => parseInt(obs.precipm)).filter(prec => prec > 0).reduce((acc,val) => acc + val, 0);
  })
}

  constructor(private weatherService: WeatherService) { }

  ngOnChanges() {
  this.getWeatherData();
  }

}
