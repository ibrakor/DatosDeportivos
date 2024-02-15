import {Component, OnInit} from '@angular/core';
import {Gol, Partido} from "../../../modelos/Partido";
import {ActivatedRoute} from "@angular/router";
import {PartidosService} from "../../../servicios/partidos.service";

@Component({
  selector: 'app-partido-detalle',
  templateUrl: './partido-detalle.component.html',
  styleUrl: './partido-detalle.component.css'
})
export class PartidoDetalleComponent implements OnInit {

  partido: Partido

  constructor(
    private route: ActivatedRoute,
    private partidoService: PartidosService
  ) {
  }

  ngOnInit(): void {
    this.obtenerPartido()
  }

  obtenerPartido() {
    const ms = +this.route.snapshot.paramMap.get('id')!!
    this.partidoService.obtenerPartidoPorMs(ms).subscribe(partido =>
      this.partido = partido!!)
  }

  obtenerGoles(equipoId: string) {
    let goles: Gol[] = []
    for (let gol of this.partido.goles!) {
      if (gol.idParticipante == equipoId) {
        goles.push(gol)
      }
    }
    goles = goles.sort((a, b) => a.timeMs - b.timeMs)
    return goles
  }

  calcularMinutoSuceso(tiempoMs: number): number {
    const diferenciaEnMs = tiempoMs - this.partido.timeMs;
    const diferenciaEnMinutos = Math.floor(diferenciaEnMs / (100 * 60));
    return Math.abs(diferenciaEnMinutos);
  }

}
