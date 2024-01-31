import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartidosListaComponent} from './partidos/partidos-lista/partidos-lista.component';
import {PartidosComponent} from './partidos/partidos.component';
import {PartidosRoutingModule} from "./partidos-routing.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PartidosListaComponent,
    PartidosComponent
  ],
  imports: [
    CommonModule,
    PartidosRoutingModule,
    FormsModule
  ]
})
export class PartidosModule { }
