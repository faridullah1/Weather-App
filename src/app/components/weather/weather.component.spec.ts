import { WeatherData } from 'src/app/models';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { from } from 'rxjs';
import { MaterialModule } from 'src/app/material/material.module';
import { WeatherService } from 'src/app/service/weather.service';
import { WeatherComponent } from './weather.component';


describe('WeatherComponent', () => {
	let app: WeatherComponent;
	let fixture: ComponentFixture<WeatherComponent>;
	let service: WeatherService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
		imports: [
			HttpClientModule,
			MaterialModule,
			RouterTestingModule,
		],
		declarations: [
			WeatherComponent
		],
		providers: [WeatherService]
		}).compileComponents();

        fixture = TestBed.createComponent(WeatherComponent);
		app = fixture.componentInstance;
        service = TestBed.inject(WeatherService);
	});

	it('should create the app', () => {
		expect(app).toBeTruthy();
	});

	it('Should set weather data obtain from OpenWeather', () => {
		let data: Partial<WeatherData> = {};

		spyOn(service, 'getWeatherData').and.callFake(() => {
			return from([data]);
		});

		app.getWeatherData(1, 2);

		expect(app.data).toBe(data);
	});
});