import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DestinatariosService } from 'src/app/services/destinatarios.service';
import {map, startWith} from 'rxjs/operators';
import { TransferenciasService } from 'src/app/services/transferencias.service';

@Component({
  selector: 'app-crear-transferencia',
  templateUrl: './crear-transferencia.component.html',
  styleUrls: ['./crear-transferencia.component.css']
})
export class CrearTransferenciaComponent implements OnInit {

  contacto = {
    nombre:'',
    run:'',
    banco:'',
    cuenta:''
  }

  transForm = new FormGroup({
    destinatario: new FormControl(null, [Validators.required]),
    monto: new FormControl('', [Validators.required, Validators.pattern('^[1-9]{1}[0-9]*$')])
  });
  
  options: any[] = [];
  filteredOptions!: Observable<any[]>;

  constructor(
    private destService:DestinatariosService,
    private transService:TransferenciasService,
    private router:Router,
  ) { }  

  ngOnInit(): void {
    this.getDestinatarios();

    const desti = this.transForm.get('destinatario') as FormControl;    

    this.filteredOptions = desti.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }

  getDestinatarios(){
    this.destService.getDestinatarios().subscribe(
      (data: any) => {
        this.options = data;
        const desti = this.transForm.get('destinatario') as FormControl;
        desti.setValue('');       
      }
    );
  }

  createTransferencia(){
    const postTransferencia = {
      destinatario: this.contacto.nombre,
      run: this.contacto.run,
      banco: this.contacto.banco,
      cuenta: this.contacto.cuenta,
      monto: this.transForm.value.monto
    }

    //const jsonTransferencia = JSON.stringify(postTransferencia);
    //console.log("ANGULAR: ", jsonTransferencia);

    this.transService.createTransferencia(postTransferencia).subscribe(
      response => {
        alert(response.message);
        this.router.navigate(['transferencias']);
      }
    );
  }

  onSelect(event:any){
    let selectedValue = event.option.id;    

    this.contacto.nombre = selectedValue.nombre;
    this.contacto.run = selectedValue.run;
    this.contacto.banco = selectedValue.banco;
    this.contacto.cuenta = selectedValue.tipocuenta;
  }

  // GET FORMS
  get destinatarioControl(): FormControl{
    return this.transForm.get('destinatario') as FormControl;
  }

  get montoControl(): FormControl{
    return this.transForm.get('monto') as FormControl;
  } 
}
