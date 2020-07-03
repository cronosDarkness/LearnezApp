import { Respuesta } from './respuesta.model';

export interface Pagina {
    paginaId: number,
    titulo: string,
    numPagina: number,
    bloqueId: number,
    respuesta: Respuesta,
}