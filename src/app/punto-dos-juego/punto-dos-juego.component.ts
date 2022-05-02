import { Component, OnInit } from '@angular/core';
import {EstadoJuego} from '../models/estado-juego';

@Component({
  selector: 'app-punto-dos-juego',
  templateUrl: './punto-dos-juego.component.html',
  styleUrls: ['./punto-dos-juego.component.css']
})
export class PuntoDosJuegoComponent implements OnInit {

  constructor() { }
  bancoPalabras: Array<string>;
  intentosJugada: number;
  palabraAAdivinar: string;
  // tslint:disable-next-line:ban-types
  palabraProgreso: string;
  estadoJuego: EstadoJuego;
  estadosJuego: Array<EstadoJuego>;
  letras: Array<string>;

  ngOnInit(): void {
    this.iniciarBancoPalabras();
    this.iniciarIntentos();
    this.iniciarLetras();
    this.iniciarEstadosJuego();
    this.iniciarPalabras();
  }
  iniciarBancoPalabras(): void{
    this.bancoPalabras = new Array<string>();
    this.bancoPalabras.push('rinoceronte');
    this.bancoPalabras.push('programación');
    this.bancoPalabras.push('recompensa');
    this.bancoPalabras.push('esqueleto');
    this.bancoPalabras.push('balance');
    this.bancoPalabras.push('asteroide');
    this.bancoPalabras.push('encendedor');
    this.bancoPalabras.push('precipicio');
    this.bancoPalabras.push('probabilidad');
    this.bancoPalabras.push('microclima');
}

iniciarLetras(): void{
    const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    this.letras = new Array<string>();
    this.letras = letras;
}

  iniciarIntentos(): void {
    this.intentosJugada = 5;
  }

  iniciarPalabras(): void {
    console.warn('Inicio de juego');
    this.palabraProgreso = '';
    this.estadoJuego = this.cambiarEstadoJuego(-1);
    this.palabraAAdivinar = this.bancoPalabras[Math.floor(Math.random() * this.bancoPalabras.length)];

    this.palabraAAdivinar.split('').forEach((currentValue, index, array) => {
      this.palabraProgreso = this.palabraProgreso.concat('*');
    });
    console.log('palabra a adivinar:' + this.palabraAAdivinar);
    console.log('palabra progreso:' + this.palabraProgreso);
  }

  iniciarEstadosJuego(): void {
    this.estadosJuego = new Array<EstadoJuego>();
    this.estadosJuego.push(new EstadoJuego(0, 'assets/img/juego/estado_1.png'));
    this.estadosJuego.push(new EstadoJuego(1, 'assets/img/juego/estado_2.png'));
    this.estadosJuego.push(new EstadoJuego(2, 'assets/img/juego/estado_3.png'));
    this.estadosJuego.push(new EstadoJuego(3, 'assets/img/juego/estado_4.png'));
    this.estadosJuego.push(new EstadoJuego(4, 'assets/img/juego/estado_5.png'));
    this.estadosJuego.push(new EstadoJuego(5, 'assets/img/juego/estado_6.png'));
  }

  cambiarEstadoJuego(indice: number): EstadoJuego{
    if (indice <= this.estadosJuego.length - 1){
      return this.estadosJuego[++indice];
    }else {
      return this.estadoJuego;
    }
  }

  verificarCoincidencia(event: Event): void{// @ts-ignore
    const letraSeleccionada = event.target.value;
    const indicesOcurrencia = this.indicesOcurrenciaLetraSeleccionada(letraSeleccionada);
    if (indicesOcurrencia.length !== 0){
      indicesOcurrencia.forEach((currentValue, index, array) => {

        const palabraArray = this.palabraProgreso.split('');
        palabraArray[currentValue] = letraSeleccionada;
        this.palabraProgreso = palabraArray.join('');

      });
      if (this.palabraAAdivinar.localeCompare(this.palabraProgreso) === 0){
        window.alert('Ha ganado el juego');
      }
    }else{
      this.intentosJugada--;
      console.error('Vidas restantes:' + this.intentosJugada);
      this.estadoJuego = this.cambiarEstadoJuego(this.estadoJuego.idEstado);
      if (this.intentosJugada === 0){
        window.alert('Ha perdido el juego');
      }
    }
  }

  indicesOcurrenciaLetraSeleccionada(letraSeleccionada: string): Array<any> {
    console.log('Tecla seleccionada: ' + letraSeleccionada);
    const indicesOcurrencia = [];
    this.palabraAAdivinar.split('').forEach((currentValue, index, array) => {
      if (currentValue.trim().localeCompare(letraSeleccionada.trim()) === 0) {
        indicesOcurrencia.push(index);
      }
    });
    console.log('Indices de la letra ' + letraSeleccionada + ' | ' + indicesOcurrencia);
    return indicesOcurrencia;
  }

}
