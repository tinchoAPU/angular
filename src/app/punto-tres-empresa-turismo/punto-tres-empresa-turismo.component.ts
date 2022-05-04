import { Component, OnInit } from '@angular/core';
import {Pasaje} from '../models/pasaje';

@Component({
  selector: 'app-punto-tres-empresa-turismo',
  templateUrl: './punto-tres-empresa-turismo.component.html',
  styleUrls: ['./punto-tres-empresa-turismo.component.css']
})
export class PuntoTresEmpresaTurismoComponent implements OnInit {
  pasaje: Pasaje;
  pasajes: Array<Pasaje>;
  constructor() {
    this.pasaje = new Pasaje();
    this.pasajes = new Array<Pasaje>();
  }

  ngOnInit(): void {
  }


  calcularPrecioConDescuento(): number {
    console.log('init metodo');
    console.log('categoria: ' + this.pasaje.categoria);
    console.log('precio: ' + this.pasaje.precio);
    if (this.pasaje.categoria && this.pasaje.precio) {
      switch (this.pasaje.categoria) {
        case 'm': {
          return this.pasaje.precio * 0.75;
        }
        case 'j': {
          return this.pasaje.precio * 0.5;
          break;
        }
        default : {
          return this.pasaje.precio;
        }
      }
    } else {
      return null;
    }
  }
}
