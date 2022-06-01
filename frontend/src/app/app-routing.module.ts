import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DestinatariosComponent } from './components/destinatarios/destinatarios.component';
import { EditarDestinatarioComponent } from './components/destinatarios/editar-destinatario/editar-destinatario.component';
import { CrearDestinatarioComponent } from './components/destinatarios/crear-destinatario/crear-destinatario.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'app', component:AppComponent, canActivate:[AuthGuard] },
  { path: 'destinatarios', component:DestinatariosComponent, canActivate:[AuthGuard] },
  { path: 'editarDestinatario', component:EditarDestinatarioComponent },
  { path: 'crearDestinatario', component:CrearDestinatarioComponent },
  { path: 'login', component:LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
