import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required])
  });

  constructor( 
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }  

  login(){
    this.authService.login(this.loginForm.value).subscribe(
      response => {
        localStorage.setItem('nombre', this.loginForm.value.usuario);
        localStorage.setItem('token', response.token);
        this.router.navigate(['inicio']);
      }
    );
  }

  get usuarioControl(): FormControl{
    return this.loginForm.get('usuario') as FormControl;
  }

  get contrasenaControl(): FormControl{
    return this.loginForm.get('contrasena') as FormControl;
  }
}