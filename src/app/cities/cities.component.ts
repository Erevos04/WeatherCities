import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cities } from '../cities';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  
cities: Cities[] = [{
  id:0,
  name: 'New York',
  url: 'http://api.wunderground.com/api/ab5ff0e58f32c6cf/history_20171030/q/NY/New_York.json'
},{
  id:1,
  name: 'Chicago',
  url: 'http://api.wunderground.com/api/ab5ff0e58f32c6cf/history_20171030/q/IL/Chicago.json'
},{
  id:2,
  name: 'Detroit',
  url: 'http://api.wunderground.com/api/ab5ff0e58f32c6cf/history_20171030/q/MI/Detroit.json'
},{
  id:3,
  name: 'Los Angeles',
  url: 'http://api.wunderground.com/api/ab5ff0e58f32c6cf/history_20171030/q/CA/Los_Angeles.json'
},{
  id:4,
  name: 'San Francisco (Oakland)',
  url: 'http://api.wunderground.com/api/ab5ff0e58f32c6cf/history_20171030/q/CA/Oakland.json'
}
]

selectedCity: Cities;
filteredCities = this.cities;

selectCity(city:Object): void {
  this.selectedCity.emit(city);
}

search(value:string): void {
  this.filteredCities = this.cities.filter(city => city.name.toLowerCase().startsWith(value.toLowerCase()));
}

@Output() selectedCity = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

}
