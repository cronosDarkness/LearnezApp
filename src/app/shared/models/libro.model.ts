import { Grado } from './grado.model';

export interface Libro {
  libroId: number,
  titulo: string,
  imgLibro: string,
  gradoId: number,
  grado: Grado,
}
