import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./comun/home/home.component";
import {PartidosComponent} from "./partidos/partidos/partidos.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('./comun/comun.module').then(m => m.ComunModule)
  },
  {
    path: 'partidos',
    component: PartidosComponent,
    loadChildren: () => import('./partidos/partidos.module').then(m => m.PartidosModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
