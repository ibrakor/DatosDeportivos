import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EquiposListaComponent} from "./equipos/equipos-lista/equipos-lista.component";

const routes: Routes = [
  {
    path: '',
    component: EquiposListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquiposRoutingModule {
}
