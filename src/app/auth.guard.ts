import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		const isLoggedIn = localStorage.getItem('isLoggedIn');
		
		if (isLoggedIn) return true;

		this.router.navigateByUrl('login');
		return false;
	}
}
