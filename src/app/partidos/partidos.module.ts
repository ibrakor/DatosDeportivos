import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartidosListaComponent} from './partidos/partidos-lista/partidos-lista.component';
import {PartidosComponent} from './partidos/partidos.component';
import {PartidosRoutingModule} from "./partidos-routing.module";
import {FormsModule} from "@angular/forms";
import {PartidoDetalleComponent} from './partidos/partido-detalle/partido-detalle.component';


@NgModule({
  declarations: [
    PartidosListaComponent,
    PartidosComponent,
    PartidoDetalleComponent
  ],
  imports: [
    CommonModule,
    PartidosRoutingModule,
    FormsModule
  ]
})
export class PartidosModule { }
