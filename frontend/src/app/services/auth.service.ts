import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:9090/api/usuarios';

  constructor(
    private http:HttpClient,
    private JwtHelper:JwtHelperService
  ) { }

  login( usuario:any ): Observable<any>{
    return this.http.post(this.url, usuario);
  }

  isAuth(): boolean{
    const token = localStorage.getItem('token') || '';
    
    if( !localStorage.getItem('token') && this.JwtHelper.isTokenExpired(token) ) return false;

    return true;
  }
}
