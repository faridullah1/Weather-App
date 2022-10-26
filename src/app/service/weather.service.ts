import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
	public isUserLoggedIn = new Subject<boolean>();
	private apiKey = environment.apiKey;
	private baseUrl = 'https://api.openweathermap.org';

	constructor(private http: HttpClient) { }

	isLoggedIn(val:boolean) {
		this.isUserLoggedIn.next(val)
	}

	findLatLan(cityName: string): Observable<any> {
		return this.http.get(`${this.baseUrl}/geo/1.0/direct?q=${cityName}&limit=5&appid=${this.apiKey}`);
	}

	getWeatherData(lat: number, lan: number) : Observable<any> {
		return this.http.get(`${this.baseUrl}/data/2.5/weather?lat=${lat}&lon=${lan}&appid=${this.apiKey}`);
	}
}
