import {Injectable} from '@angular/core';
import {of} from "rxjs";
import {EQUIPOS} from "../data/EQUIPOS";

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor() {
  }

  obtenerEquipos(){
    return of(EQUIPOS)
  }
}
