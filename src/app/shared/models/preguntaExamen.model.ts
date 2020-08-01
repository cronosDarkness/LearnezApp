import { Examen } from './examen.model';
import { OpcionExamen } from './opcionExamen.model';

export class PreguntaExamen {
  preguntaExamenId: number
  pregunta: string
  respuestaId: number
  numPregunta: number
  examenId: number
  examen: Examen
  opcionexamen: OpcionExamen
}
