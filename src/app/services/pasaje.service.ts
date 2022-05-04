import { Injectable } from '@angular/core';
import {Pasaje} from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  pasajes: Array<Pasaje>;
  constructor() {
    this.pasajes = new Array<Pasaje>();
  }

  // tslint:disable-next-line:no-shadowed-variable typedef
  guardarPasaje(pasaje: Pasaje){
    pasaje.fechaVenta = new Date();
    pasaje.id = this.pasajes.length + 1;
    this.pasajes.push(pasaje);
  }

  // tslint:disable-next-line:typedef
  obtenerPasajes(){
    return this.pasajes;
  }

  // tslint:disable-next-line:typedef
  obtenerResumenVentas() {
    // tslint:disable-next-line:only-arrow-functions
    const resumenVentas = {
      ventasAdultos: 0,
      ventasMenores: 0,
      ventasJubilados: 0,
      ventasTotales: 0
    };

    // tslint:disable-next-line:only-arrow-functions typedef
    this.pasajes.forEach(function(pasaje, index, pasajes) {
      switch (pasaje.categoria) {
        case 'j': {
          resumenVentas.ventasJubilados++;
          break;
        }
        case 'm': {
          resumenVentas.ventasMenores++;
          break;
        }
        default: {
          resumenVentas.ventasAdultos++;
        }
      }
    });
    resumenVentas.ventasTotales = resumenVentas.ventasAdultos + resumenVentas.ventasMenores + resumenVentas.ventasJubilados;
    return resumenVentas;
  }
}
