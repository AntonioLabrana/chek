import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciasService } from 'src/app/services/transferencias.service';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.css']
})
export class TransferenciasComponent implements OnInit {

  private historialTransferencias:any = [];

  constructor(
    private transferenciasService:TransferenciasService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getHistorialTransferencias();
  }

  createTransferencia(){   
    this.router.navigate(['crearTransferencia']); 
  }

  getHistorialTransferencias(){
    this.transferenciasService.getTransferencias().subscribe(
      response => {    
        this.historialTransferencias = response;
      }
    );
  }

  getTransferencias(){
    return this.historialTransferencias;
  }
}
