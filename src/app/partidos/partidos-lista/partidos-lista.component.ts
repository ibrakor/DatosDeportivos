import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PartidosService} from "../../servicios/partidos.service";

@Component({
  selector: 'app-partidos-lista',
  templateUrl: './partidos-lista.component.html',
  styleUrl: './partidos-lista.component.css'
})
export class PartidosListaComponent implements OnInit {

  post$: Observable<any>

  constructor(private partidosSerive: PartidosService) {
  }

  ngOnInit(): void {
    this.post$ = this.partidosSerive.obtenerPartidos()
  }






}
