import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Weather } from './weather';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  getWeatherData (url: string): Observable<Weather[]> {
    return this.http.get<Weather[]>(url)
      .pipe(
        tap(weatherData => this.log(`fetched weatherData`)),
        catchError(this.handleError('getWeatherData', []))
      );
  }

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {


    console.error(error);


    return of(result as T);
  };
}


  constructor(
  private http: HttpClient,
  private messageService: MessageService) { }

  private log(message: string) {
  this.messageService.add('WeatherService: ' + message);
}

}
