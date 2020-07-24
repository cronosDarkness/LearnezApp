import { Libro } from './libro.model';
import { Pagina } from './pagina.model';
import { Examen } from './examen.model';

export interface Bloque {
    bloqueId: number,
    nombre: string,
    libroId: number,
    libro: Libro,
    pagina: Pagina,
    examen: Examen
}