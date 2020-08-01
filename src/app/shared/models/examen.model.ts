import { Bloque } from './bloque.model';

export class Examen {
  examenId: number;
  ciclo: string;
  numPreguntas: number;
  bloqueId: number;
  bloque: Bloque;
}
