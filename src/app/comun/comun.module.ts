import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    HomeComponent
  ],
  exports: [
    CabeceraComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class ComunModule { }
