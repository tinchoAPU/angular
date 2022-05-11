import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PuntoUnoSliderNoticiasComponent} from './punto-uno-slider-noticias/punto-uno-slider-noticias.component';
import {PuntoDosJuegoComponent} from './punto-dos-juego/punto-dos-juego.component';
import {PuntoTresEmpresaTurismoComponent} from './punto-tres-empresa-turismo/punto-tres-empresa-turismo.component';
import {PrintJsComponent} from './printers/print-js/print-js.component';

const routes: Routes = [
  {path: 'punto1', component: PuntoUnoSliderNoticiasComponent},
  {path: 'punto2', component: PuntoDosJuegoComponent},
  {path: 'punto3', component: PuntoTresEmpresaTurismoComponent},
  {path: 'printJs', component: PrintJsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
