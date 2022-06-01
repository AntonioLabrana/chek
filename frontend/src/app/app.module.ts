import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DestinatariosComponent } from './components/destinatarios/destinatarios.component';
import { EditarDestinatarioComponent } from './components/destinatarios/editar-destinatario/editar-destinatario.component';
import { CrearDestinatarioComponent } from './components/destinatarios/crear-destinatario/crear-destinatario.component';

// Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Providers
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { InicioComponent } from './components/inicio/inicio.component';
import { TransferenciasComponent } from './components/transferencias/transferencias/transferencias.component';
import { CrearTransferenciaComponent } from './components/transferencias/crear-transferencia/crear-transferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DestinatariosComponent,
    EditarDestinatarioComponent,
    CrearDestinatarioComponent,
    InicioComponent,
    TransferenciasComponent,
    CrearTransferenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule    
  ],
  providers: [
    { provide:JWT_OPTIONS, useValue:JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
