import {NgModule} from '@angular/core';
import {PartidosListaComponent} from "./partidos/partidos-lista/partidos-lista.component";
import {RouterModule, Routes} from "@angular/router";
import {PartidoDetalleComponent} from "./partidos/partido-detalle/partido-detalle.component";

const routes: Routes = [

  {
    path: '',
    component: PartidosListaComponent
  },
  {
    //incluir detalle con id
    path: 'detalle/:id',
    component: PartidoDetalleComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidosRoutingModule { }
