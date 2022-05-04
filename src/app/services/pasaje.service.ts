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
    this.pasajes.push(pasaje);
  }

  // tslint:disable-next-line:typedef
  obtenerPasajes(){
    return this.pasajes;
  }
}
