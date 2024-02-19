import {Injectable} from '@angular/core';
import {of} from "rxjs";
import {PARTIDOS} from "../data/PARTIDOS";

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

  eliminarPartido(partidoAeliminar: any) {
    const index = PARTIDOS.findIndex(partido => partido.timeMs == partidoAeliminar.timeMs)
    PARTIDOS.splice(index, 1)
  }
}
