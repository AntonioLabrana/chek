import { Component, OnInit } from '@angular/core';
import { DestinatariosService } from 'src/app/services/destinatarios.service';

@Component({
  selector: 'app-destinatarios',
  templateUrl: './destinatarios.component.html',
  styleUrls: ['./destinatarios.component.css']
})
export class DestinatariosComponent implements OnInit {

  destinatarios: any = [];

  constructor(
    private destService: DestinatariosService
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
    this.destService.updateDestinatario(dest.id, jsonBody).subscribe();
  }

  deleteDestinatario(id:number){
    this.destService.deleteDestinatario(id).subscribe();
  }
}