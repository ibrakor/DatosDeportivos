import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EquiposRoutingModule} from "./equipos-routing.module";
import {EquiposComponent} from './equipos/equipos.component';
import {EquiposListaComponent} from './equipos/equipos-lista/equipos-lista.component';
import {EquipoDetalleComponent} from './equipos/equipo-detalle/equipo-detalle.component';


@NgModule({
  declarations: [
    EquiposComponent,
    EquiposListaComponent,
    EquipoDetalleComponent
  ],
  imports: [
    CommonModule,
    EquiposRoutingModule
  ]
})
export class EquiposModule { }
