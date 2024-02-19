import {Component, OnInit} from '@angular/core';
import {Gol, Partido, Tarjeta} from "../../../modelos/Partido";
import {ActivatedRoute, Router} from "@angular/router";
import {PartidosService} from "../../../servicios/partidos.service";
import {ModalComponent} from "../../../comun/modal/modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

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
    private modal: NgbModal,
    private router: Router
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

  obtenerTarjetas(equipoId: string) {
    let tarjetas: Tarjeta[] = []
    for (let tarjeta of this.partido.tarjetas!) {
      if (tarjeta.idParticipante == equipoId) {
        tarjetas.push(tarjeta)
      }
    }
    tarjetas = tarjetas.sort((a, b) => a.timeMs - b.timeMs)
    return tarjetas
  }

  calcularMinutoSuceso(tiempoMs: number): number {
    const diferenciaEnMs = tiempoMs - this.partido.timeMs;
    const diferenciaEnMinutos = Math.floor(diferenciaEnMs / (100 * 60));
    return Math.abs(diferenciaEnMinutos);
  }

  eliminarPartido() {
    this.partidoService.eliminarPartido(this.partido.timeMs)
    this.abrirModal()
    this.router.navigate(['partidos'])
  }

  abrirModal() {
    const modalRef = this.modal.open(ModalComponent);
    modalRef.componentInstance.title = 'Partido eliminado';
    modalRef.componentInstance.body = 'El partido se ha eliminado correctamente.';
  }
}
