export interface Partido {
  idLocal: string;
  idVisitante: string;
  timeMs: number;
  goles?: Gol[]
  tarjetas?: Tarjeta[]
}

export interface Gol {
  idParticipante: string,
  timeMs: number
}

export interface Tarjeta {
  idParticipante: string,
  tipoTarjeta: string,
  timeMs: number
}
