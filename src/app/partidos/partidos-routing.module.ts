import {NgModule} from '@angular/core';
import {PartidosListaComponent} from "./partidos/partidos-lista/partidos-lista.component";
import {RouterModule, Routes} from "@angular/router";
import {PartidoDetalleComponent} from "./partidos/partido-detalle/partido-detalle.component";
import {PartidoCrearFormComponent} from "./partidos/partido-crear-form/partido-crear-form.component";

const routes: Routes = [

  {
    path: '',
    component: PartidosListaComponent
  },
  {
    //incluir detalle con id
    path: 'detalle/:id',
    component: PartidoDetalleComponent
  },
  {
    path: 'crear',
    component: PartidoCrearFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidosRoutingModule { }
