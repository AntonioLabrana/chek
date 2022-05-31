import { Component, OnInit } from '@angular/core';
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

  getBancos(){
    
  }

  getDestinatarios(){   
    this.destService.getDestinatarios().subscribe(
      response => {    
        this.destinatarios = response;
      }
    );
  }

  createDestinatario(dest:any){
    const jsonBody = JSON.stringify(dest);
    
    this.destService.createDestinatario(jsonBody).subscribe();
  }

  updateDestinatario(dest:any){
    const jsonBody = JSON.stringify(dest);
    console.log( jsonBody );
    this.destService.updateDestinatario(dest.id, jsonBody).subscribe(
      response => {
        alert(response.message);
      }
    );
  }

  deleteDestinatario(id:number){
    this.destService.deleteDestinatario(id).subscribe(
      response => {
        alert(response.message);
      }
    );

    this.router.navigate(['destinatarios']);
  }
}