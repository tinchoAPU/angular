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
    this.noticias.push(new Noticia('Robo en La Plata', 'Noticia 1', 'assets/img/slider_image_1.jpg'));
    this.noticias.push(new Noticia('Inflación por las nubes', 'Noticia 2', 'assets/img/slider_image_2.jpg'));
    this.noticias.push(new Noticia('Guerra Ucrania/Rusia', 'Noticia 3', 'assets/img/slider_image_3.jpg'));
  }
}
