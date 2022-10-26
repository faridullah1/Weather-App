import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	title = 'Weather App';
	loggedIn = false;

	constructor(private router: Router, private service: WeatherService) { }

	ngOnInit(): void {
		const isLoggedIn = localStorage.getItem('isLoggedIn');
		if (isLoggedIn) this.loggedIn = true;

		this.service.isUserLoggedIn.subscribe(value => this.loggedIn = value);
	}

	onLogout(): void {
		this.router.navigateByUrl('/login')
		localStorage.removeItem('isLoggedIn');
		this.service.isLoggedIn(false);
	}
}
