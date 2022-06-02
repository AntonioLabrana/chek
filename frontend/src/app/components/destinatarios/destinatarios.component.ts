import { Component, Input, OnInit } from '@angular/core';
import { DestinatariosService } from 'src/app/services/destinatarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destinatarios',
  templateUrl: './destinatarios.component.html',
  styleUrls: ['./destinatarios.component.css']
})
export class DestinatariosComponent implements OnInit {

  destinatarios: any = [];

  constructor(
    private destService: DestinatariosService,
    private router: Router    
  ) {}

  ngOnInit(): void {
    this.getDestinatarios();
  }

  getDestinatarios(){   
    this.destService.getDestinatarios().subscribe(
      response => {    
        this.destinatarios = response;
      }
    );
  }

  createDestinatario(){
    this.router.navigate(['crearDestinatario']);
  }

  updateDestinatario(dest:any){
    localStorage.setItem('editarDest', JSON.stringify(dest))
    this.router.navigate(['editarDestinatario']);
  }

  deleteDestinatario(id:number){
    this.destService.deleteDestinatario(id).subscribe(
      response => {
        alert(response.message);
        this.ngOnInit();
      }
    );    
  }
}