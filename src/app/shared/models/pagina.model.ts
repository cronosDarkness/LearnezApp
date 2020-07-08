import { Respuesta } from './respuesta.model';

export interface Pagina {
    paginaId: number,
    titulo: string,
    numPagina: number,
    imgPagina: string,
    bloqueId: number,
    respuesta: Respuesta,
}