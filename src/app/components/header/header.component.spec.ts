import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { WeatherService } from 'src/app/service/weather.service';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				HttpClientModule,
				MaterialModule,
				MatMenuModule,
				RouterTestingModule,
				BrowserAnimationsModule
			],
			declarations: [
				HeaderComponent
			],
			providers: [WeatherService]
		})
		.compileComponents();

		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render title', () => {
		const fixture = TestBed.createComponent(HeaderComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('.app-title')?.textContent).toEqual('Weather App');
	});

	it('should display logout menu is user is logged In', () => {
		localStorage.setItem('isLoggedIn', 'true');

		component.ngOnInit();

		expect(component.loggedIn).toBeTruthy();
	});
});
