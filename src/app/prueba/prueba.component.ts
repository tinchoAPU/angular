import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor() { }

  lista: string[] = ['hola', 'que', 'tal', 'estas', 'si o no'];

  listaNumeros: number[] = [1, 2, 3, 4, 5 , 6];

  ngOnInit(): void {
  }

}
