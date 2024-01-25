import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { HomeComponent } from './home/home.component';
import { PieComponent } from './pie/pie.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    HomeComponent,
    PieComponent
  ],
  exports: [
    CabeceraComponent,
    HomeComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class ComunModule { }
