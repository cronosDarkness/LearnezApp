import { Grado } from './grado.model';

export interface Libro {
  libroId: number
  titulo: string
  inicioNumPaginas: number
  numPaginas: number
  imgLibro: string
  gradoId: number
  grado: Grado
}
