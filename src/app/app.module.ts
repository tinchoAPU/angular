import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PuntoUnoSliderNoticiasComponent } from './punto-uno-slider-noticias/punto-uno-slider-noticias.component';
import { PuntoDosJuegoComponent } from './punto-dos-juego/punto-dos-juego.component';
import { ShowModalComponent } from './show-modal/show-modal.component';
import { PruebaComponent } from './prueba/prueba.component';
import { PuntoTresEmpresaTurismoComponent } from './punto-tres-empresa-turismo/punto-tres-empresa-turismo.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PuntoUnoSliderNoticiasComponent,
    PuntoDosJuegoComponent,
    ShowModalComponent,
    PruebaComponent,
    PuntoTresEmpresaTurismoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
