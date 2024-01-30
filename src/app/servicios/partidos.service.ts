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
}
