import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
	{ path: '', redirectTo: 'weather', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'weather', component: WeatherComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
