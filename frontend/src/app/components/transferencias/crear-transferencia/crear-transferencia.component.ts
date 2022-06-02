import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DestinatariosService } from 'src/app/services/destinatarios.service';

@Component({
  selector: 'app-crear-transferencia',
  templateUrl: './crear-transferencia.component.html',
  styleUrls: ['./crear-transferencia.component.css']
})
export class CrearTransferenciaComponent implements OnInit {

  destinatarios:any = [];  

  contacto = {
    nombre:'',
    correo:'',
    banco:'',
    cuenta:''
  }

  transForm = new FormGroup({
    destinatario: new FormControl('', [Validators.required]),
    run: new FormControl('', [Validators.required]),    
    banco: new FormControl('', [Validators.required]),
    cuenta: new FormControl('', [Validators.required]),
    monto: new FormControl('', [Validators.required, Validators.pattern('^[1-9]{1}[0-9]*$')])
  });

  constructor(
    private destService:DestinatariosService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getDestinatarios();
  }

  getDestinatarios(){
    this.destService.getDestinatarios().subscribe(
      (data: any) => {
        //console.log("data: ", data);

        data.forEach((element: any) => {
          //console.log("destinatario: ", element);
          this.destinatarios.push(element);
        });
      }
    );    
  }

  createTransferencia(){

  }

  onSelect(event:any){
    console.log("ON SELECT:", event.target.value);

  }

  // GET FORMS
  get destinatarioControl(): FormControl{
    return this.transForm.get('destinatario') as FormControl;
  }

  get montoControl(): FormControl{
    return this.transForm.get('monto') as FormControl;
  }

}
