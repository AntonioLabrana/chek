import { Component, OnInit } from '@angular/core';
import { DestinatariosService } from 'src/app/services/destinatarios.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-destinatario',
  templateUrl: './editar-destinatario.component.html',
  styleUrls: ['./editar-destinatario.component.css']
})
export class EditarDestinatarioComponent implements OnInit {
  
  jsonModel:any = '';
  editForm:any;
  bancos:any[] = [];

  constructor(  
    private destService: DestinatariosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jsonModel = localStorage.getItem('editarDest');
    this.jsonModel = JSON.parse( this.jsonModel );

    this.editForm = new FormGroup({
        nombre: new FormControl(this.jsonModel.nombre, [Validators.required]),
        run: new FormControl(this.jsonModel.run, [Validators.required]),
        correo: new FormControl(this.jsonModel.correo, [Validators.required, Validators.email]),
        banco: new FormControl(this.jsonModel.banco, [Validators.required]),
        tipocuenta: new FormControl(this.jsonModel.tipocuenta, [Validators.required]),
        numerocuenta: new FormControl(this.jsonModel.numerocuenta, [Validators.required, Validators.pattern('^[0-9]+[0-9]*$')])
    });

    this.destService.getBancos().subscribe(
      (data: any) => {
        data.banks.forEach((element: any) => {
          this.bancos.push(element.name);
        });
      }
    );
  }

  editDestinatario(){   
    this.destService.updateDestinatario( this.jsonModel.id, this.editForm.value).subscribe(
      response => {
        alert(response.message);
        localStorage.removeItem("editarDest");
        this.router.navigate(['destinatarios']);
      }
    );
  }  

  // GET FORMS
  get nombreControl(): FormControl{
    return this.editForm.get('nombre') as FormControl;
  }

  get runControl(): FormControl{
    return this.editForm.get('run') as FormControl;
  }

  get correoControl(): FormControl{
    return this.editForm.get('correo') as FormControl;
  }

  get bancoControl(): FormControl{
    return this.editForm.get('banco') as FormControl;
  }

  get tipoCuentaControl(): FormControl{
    return this.editForm.get('tipocuenta') as FormControl;
  }

  get numeroCuentaControl(): FormControl{
    return this.editForm.get('numerocuenta') as FormControl;
  }
}
