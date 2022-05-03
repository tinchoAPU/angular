import { Component, OnInit } from '@angular/core';
import {Noticia} from '../models/noticia';

@Component({
  selector: 'app-punto-uno-slider-noticias',
  templateUrl: './punto-uno-slider-noticias.component.html',
  styleUrls: ['./punto-uno-slider-noticias.component.css']
})
export class PuntoUnoSliderNoticiasComponent implements OnInit {

  constructor() { }
  noticias: Array<Noticia>;

  ngOnInit(): void {
    this.iniciarNoticias();
  }

  iniciarNoticias(): void {
    this.noticias = new Array<Noticia>();
    this.noticias.push(new Noticia('Guerra Rusia-Ucrania: un baño de sangre está frenando la invasión rusa', 'La ofensiva del Kremlin en el este avanza mucho más lenta de lo planeado, a pesar de que la capacidad militar de Rusia supera ampliamente a la de Ucrania.', 'assets/img/noticia_1.png'));
    this.noticias.push(new Noticia('Sigue la presión inflacionaria: cuáles fueron los principales aumentos en los alimentos durante abril', 'En las últimas horas, dos informes privados dieron a conocer los incrementos registrados en ese rubro. Mientras, se espera el dato oficial que el INDEC difundirá el próximo 12 de mayo.', 'assets/img/noticia_2.png'));
    this.noticias.push(new Noticia('¿Javier Milei ya tiene su propia calle? Se encontraría en Neuquén y se pudo ver por Google Maps', 'La imagen que se viralizó en las redes sociales muestra el nombre del diputado nacional por La Libertad Avanza en una arteria de la ciudad de Plottier. Los vecinos de la zona señalaron cuál es su postura sobre el tema.', 'assets/img/noticia_3.png'));
  }
}
