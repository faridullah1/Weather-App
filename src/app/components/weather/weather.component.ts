import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../service/weather.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { WeatherData } from 'src/app/models';


@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit 
{
	city = new FormControl('');
	data: Partial<WeatherData>;
	loading = false;

	constructor(private service: WeatherService) { }

	ngOnInit(): void {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(pos => {
				this.service.getWeatherData(pos.coords.latitude, pos.coords.longitude).subscribe({
					next: (resp: any) => {
						this.data = resp;
						this.city.setValue(this.data.name);
					}
				});
			});
		}

		this.city.valueChanges.pipe(debounceTime(400), distinctUntilChanged()).subscribe((city: string) =>
        {
            this.geData(city);
        });
	}

	geData(city: string): void {
		this.loading = true;

		this.service.findLatLan(city).subscribe({
			next: (resp: any) => {
				this.loading = false;

				if (resp.length > 0) {
					const { lat, lon } = resp[0];
					this.getWeatherData(lat, lon);					
				}
			},
			error: () => this.loading = false
		})
	}

	getWeatherData(lat: number, lan: number): void {
		this.loading = true;

		this.service.getWeatherData(lat, lan).subscribe({
			next: (resp: any) => {
				this.loading = false;
				this.data = resp;
			},
			error: () => this.loading = false
		});
	}
}
