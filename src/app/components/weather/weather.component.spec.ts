import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { WeatherService } from 'src/app/service/weather.service';
import { WeatherComponent } from './weather.component';


describe('WeatherComponent', () => {
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
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(WeatherComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});