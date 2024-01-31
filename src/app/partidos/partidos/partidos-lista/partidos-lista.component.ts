import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PartidosService} from "../../../servicios/partidos.service";
import {Partido} from "../../../modelos/Partido";

@Component({
  selector: 'app-partidos-lista',
  templateUrl: './partidos-lista.component.html',
  styleUrl: './partidos-lista.component.css'
})
export class PartidosListaComponent implements OnInit {


  partidos: Partido[] = []
  terminoBusqueda = '';

  partidosFiltrados() {
    return this.partidos.filter(partido =>
      partido.idLocal.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) ||
      partido.idVisitante.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
    );
  }


  constructor(private partidosSerive: PartidosService) {
  }




  ngOnInit(): void {
    this.partidosSerive.obtenerPartidos().subscribe(resultado => (this.partidos = resultado))
  }






}
