import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DestinatariosService } from 'src/app/services/destinatarios.service';

@Component({
  selector: 'app-crear-destinatario',
  templateUrl: './crear-destinatario.component.html',
  styleUrls: ['./crear-destinatario.component.css']
})
export class CrearDestinatarioComponent implements OnInit {

  bancos:any[] = [];

  createForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    run: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    banco: new FormControl('', [Validators.required]),
    tipocuenta: new FormControl('', [Validators.required]),
    numerocuenta: new FormControl('', [Validators.required])
  });

  constructor(
    private destService: DestinatariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.destService.getBancos().subscribe(
      (data: any) => {
        data.banks.forEach((element: any) => {
          //console.log("element: ", element.name);
          this.bancos.push(element.name);
        });

        //console.log("bancos: ", this.bancos);
      }
    );
  }

  createDestinatario(){
    this.destService.createDestinatario(this.createForm.value).subscribe(
      response => {
        alert(response.message);
        this.router.navigate(['destinatarios']);
      }
    );
  }

  // GET FORMS
  get nombreControl(): FormControl{
    return this.createForm.get('nombre') as FormControl;
  }

  get runControl(): FormControl{
    return this.createForm.get('run') as FormControl;
  }

  get telefonoControl(): FormControl{
    return this.createForm.get('telefono') as FormControl;
  }

  get bancoControl(): FormControl{
    return this.createForm.get('banco') as FormControl;
  }

  get tipoCuentaControl(): FormControl{
    return this.createForm.get('tipocuenta') as FormControl;
  }

  get numeroCuentaControl(): FormControl{
    return this.createForm.get('numerocuenta') as FormControl;
  }
}
