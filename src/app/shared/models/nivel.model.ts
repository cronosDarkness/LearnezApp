import { Grado } from './grado.model';

export interface Nivel {
    nivelId: number,
    nombre: string,
    grado: Grado,
}
