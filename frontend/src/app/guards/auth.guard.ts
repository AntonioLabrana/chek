import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private JwtHelper:JwtHelperService
  ){ }

  canActivate(): boolean{
    const token = localStorage.getItem('token') || '';

    if( !localStorage.getItem('token') && this.JwtHelper.isTokenExpired(token) || !this.authService.isAuth() ){ 
      alert("No has iniciado a sesión.  Redirigiendo a Login...");
      this.router.navigate(['login']);

      return false;
    }

    return true;
  }
}