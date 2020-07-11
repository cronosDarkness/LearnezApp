import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bloque } from '../models/bloque.model';

@Injectable({
  providedIn: 'root'
})
export class BloqueService {

  constructor(public http: HttpClient) { }

  url = "http://localhost:6045/api/bloques/";

  // Obtiene todos los bloques y los libros relacionados
  public getBloques(): Observable<Bloque[]> {
    return this.http.get<Bloque[]>(this.url);
  }
  
  // Obtiene los bloques de un libro y las páginas relacionadas, recibe libroId
  public getBloquesPorLibro(libroId: number): Observable<Bloque[]> {
    return this.http.get<Bloque[]>(this.url + "libro/" + libroId);
  }

  // Obtiene el bloque, el libro y el grado. En referencia al bloque solicitado, recibe bloqueId
  public getBloque(bloqueId: number): Observable<Bloque> {
    return this.http.get<Bloque>(this.url + bloqueId);
  }
}
