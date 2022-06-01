import { Component, OnInit } from '@angular/core';
import { TransferenciasService } from 'src/app/services/transferencias.service';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.css']
})
export class TransferenciasComponent implements OnInit {

  historialTransferencias:any = [];

  constructor(
    private transferenciasService:TransferenciasService
  ) { }

  ngOnInit(): void {
    this.getHistorialTransferencias();
  }

  createTransferencia(){   
     
  }

  getHistorialTransferencias(){
    this.transferenciasService.getTransferencias().subscribe(
      response => {    
        this.historialTransferencias = response;
      }
    );
  }
}
