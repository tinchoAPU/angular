import { Component, OnInit } from '@angular/core';
import {Pasaje} from '../models/pasaje';
import {PasajeService} from '../services/pasaje.service';

@Component({
  selector: 'app-punto-tres-empresa-turismo',
  templateUrl: './punto-tres-empresa-turismo.component.html',
  styleUrls: ['./punto-tres-empresa-turismo.component.css']
})
export class PuntoTresEmpresaTurismoComponent implements OnInit {
  pasaje: Pasaje;
  pasajes: Array<Pasaje>;
  resumenVentas: any;
  constructor(private pasajeService: PasajeService) {
    pasajeService = new PasajeService();
    this.pasaje = new Pasaje();
    this.resumenVentas = {};
    this.pasajes = new Array<Pasaje>();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  obtenerPasajes(){
    return this.pasajeService.obtenerPasajes();
  }

// tslint:disable-next-line:typedef
  guardarPasaje() {
    const pasaje = new Pasaje();
    pasaje.categoria = this.pasaje.categoria;
    pasaje.nombrePasajero = this.pasaje.nombrePasajero;
    pasaje.precio = this.pasaje.precio;
    pasaje.dni = this.pasaje.dni;
    this.pasajeService.guardarPasaje(pasaje);
    this.pasaje = new Pasaje();
    this.obtenerResumenVentas();
  }

  // tslint:disable-next-line:typedef
  obtenerResumenVentas() {
    this.resumenVentas =  this.pasajeService.obtenerResumenVentas();
  }

  calcularPrecioConDescuento(): number {
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
