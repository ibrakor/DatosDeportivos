import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartidosListaComponent} from './partidos-lista/partidos-lista.component';
import {PartidosComponent} from './partidos/partidos.component';


@NgModule({
  declarations: [
    PartidosListaComponent,
    PartidosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PartidosModule { }
