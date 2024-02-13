import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartidosListaComponent} from './partidos/partidos-lista/partidos-lista.component';
import {PartidosComponent} from './partidos/partidos.component';
import {PartidosRoutingModule} from "./partidos-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PartidoDetalleComponent} from './partidos/partido-detalle/partido-detalle.component';
import { PartidoCrearFormComponent } from './partidos/partido-crear-form/partido-crear-form.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    PartidosListaComponent,
    PartidosComponent,
    PartidoDetalleComponent,
    PartidoCrearFormComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    PartidosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PartidosModule { }
