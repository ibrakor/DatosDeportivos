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

  Partido: Partido

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
      this.Partido = partido!!)
  }

}
