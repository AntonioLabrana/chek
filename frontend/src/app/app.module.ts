import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DestinatariosComponent } from './components/destinatarios/destinatarios.component'

// Modules
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Providers
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DestinatariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide:JWT_OPTIONS, useValue:JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
