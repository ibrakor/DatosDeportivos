import {Injectable} from '@angular/core';
import {of} from "rxjs";
import {PARTIDOS} from "../data/PARTIDOS";
import {Partido} from "../modelos/Partido";

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  constructor() {
  }

  obtenerPartidos() {
    return of(PARTIDOS)
  }

  obtenerPartidoPorMs(ms: number) {
    return of(PARTIDOS.find(partido => partido.timeMs == ms))
  }
  agregarPartido(nuevoPartido: any){
    PARTIDOS.push(nuevoPartido)
  }
}
