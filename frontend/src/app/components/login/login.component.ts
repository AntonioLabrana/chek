import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credencial = {
    usuario: '',
    contrasena: ''
  }

  constructor( 
    private authService: AuthService ,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.credencial).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['app']);
      }
    );
  }
}