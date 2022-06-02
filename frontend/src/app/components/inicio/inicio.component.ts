import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  private nombre:any;

  constructor() { }

  ngOnInit(): void {
    this.nombre = localStorage.getItem('nombre');
  }

  getName(){
    return this.nombre;
  }
}
