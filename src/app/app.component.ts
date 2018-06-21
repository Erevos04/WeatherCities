import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather Cities';
  selectedCity: Object;

  updateCity(city: Object): void {
    this.selectedCity = city;
  }

}
