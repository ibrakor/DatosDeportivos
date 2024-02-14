import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Equipo} from "../../../modelos/Equipo";
import {EquipoService} from "../../../servicios/equipo.service";
import {Router} from "@angular/router";
import {Partido} from "../../../modelos/Partido";
import {PartidosService} from "../../../servicios/partidos.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "../../../comun/modal/modal.component";

@Component({
  selector: 'app-partido-crear-form',
  templateUrl: './partido-crear-form.component.html',
  styleUrl: './partido-crear-form.component.css'
})
export class PartidoCrearFormComponent {

  equipos: Equipo[]

  constructor(private modal: NgbModal, private equipoService: EquipoService, private partidoService: PartidosService, private router: Router, private fb: FormBuilder) {
    equipoService.obtenerEquipos().subscribe(result => (this.equipos = result))
  }

  formularioPartido = this.fb.group({
    equipoLocal: ['', [Validators.required]],
    equipoVisitante: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    hora: ['', [Validators.required]],
  })

  private validarFormulario() {
    if (this.formularioPartido.valid){
      return this.comprobarEquipos();
    } else {
      return false
    }
  }


  comprobarEquipos(){
     if (this.formularioPartido.value.equipoLocal != this.formularioPartido.value.equipoVisitante){
       this.formularioPartido.get('equipoVisitante')?.setErrors({ 'equiposIguales': false })
       return  true
    } else {
       this.formularioPartido.get('equipoVisitante')?.setErrors({ 'equiposIguales': true })
       return  false
    }
  }

  submit(){
    if (this.validarFormulario()){
      this.guardarPartido()
    } else {

      this.formularioPartido.markAllAsTouched()
    }

  }

  guardarPartido() {
    const fecha = this.formularioPartido.value.fecha;
    const hora = this.formularioPartido.value.hora;

    const fechaHoraCompleta = new Date(`${fecha}T${hora}`);
    const timeMs = fechaHoraCompleta.getTime();

    const partido: Partido = {
      idLocal: this.formularioPartido.value.equipoLocal!,
      idVisitante: this.formularioPartido.value.equipoVisitante!,
      timeMs: timeMs
    };

    this.partidoService.agregarPartido(partido)
    this.abrirModal()
    this.router.navigate(['partidos'])
  }

  abrirModal() {
    const modalRef = this.modal.open(ModalComponent);
    modalRef.componentInstance.title = 'Partido Guardado';
    modalRef.componentInstance.body = 'El partido se ha guardado correctamente.';
  }

}
