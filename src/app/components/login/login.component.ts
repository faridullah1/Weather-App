import { Component } from '@angular/core';
import { WeatherService } from '../../service/weather.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent 
{
	theForm: FormGroup;
	invalidCredentials = false;

	constructor(private router: Router, private service: WeatherService) {
		this.theForm = new FormGroup({
			username: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required)
		});
	}

	onSubmit(): void {
		const { username, password } = this.theForm.value;

		if(username == 'admin' && password == '1234') {
			localStorage.setItem('isLoggedIn', 'true');
			
			this.router.navigateByUrl('/weather');		
			this.service.isLoggedIn(true);
		}
		else {
			this.invalidCredentials = true;
		}
	}
}
