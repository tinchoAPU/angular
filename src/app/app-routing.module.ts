import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PuntoUnoSliderNoticiasComponent} from './punto-uno-slider-noticias/punto-uno-slider-noticias.component';
import {PuntoDosJuegoComponent} from './punto-dos-juego/punto-dos-juego.component';

const routes: Routes = [
  {path: 'punto1', component: PuntoUnoSliderNoticiasComponent},
  {path: 'punto2', component: PuntoDosJuegoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
