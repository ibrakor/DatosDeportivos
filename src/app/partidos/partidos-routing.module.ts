import { NgModule } from '@angular/core';
import {PartidosListaComponent} from "./partidos/partidos-lista/partidos-lista.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: PartidosListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidosRoutingModule { }
