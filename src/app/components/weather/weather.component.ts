import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../service/weather.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit 
{
	city = new FormControl('Islamabad');
	data : any

	constructor(private service: WeatherService) { }

	ngOnInit(): void {
		this.geData('Islamabad');

		this.city.valueChanges.pipe(debounceTime(400), distinctUntilChanged()).subscribe((city: string) =>
        {
            this.geData(city);
        });
	}

	geData(city: string): void {
		this.service.findLatLan(city).subscribe({
			next: (resp: any) => {
				if (resp.length > 0) {
					const { lat, lon } = resp[0];

					this.service.getWeatherData(lat, lon).subscribe({
						next: (resp: any) => {
							this.data = resp;
						}
					});
				}
			}
		})
	}
}
