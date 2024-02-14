import {Component, OnInit} from '@angular/core';
import {Partido} from "../../../modelos/Partido";
import {ActivatedRoute} from "@angular/router";
import {PartidosService} from "../../../servicios/partidos.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-partido-detalle',
  templateUrl: './partido-detalle.component.html',
  styleUrl: './partido-detalle.component.css'
})
export class PartidoDetalleComponent implements OnInit {

  partido: Partido

  constructor(
    private route: ActivatedRoute,
    private partidoService: PartidosService,
    private location: Location
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

  contarGolesPorEquipo(equipoId: string) {
    let goles = 0
    for (let gol of this.partido.goles!) {
      if (gol.idParticipante == equipoId) {
        goles++
      }
    }
    return goles
  }

}
