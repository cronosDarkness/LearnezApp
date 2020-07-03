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

  public getBloquesPorLibro(libroId: number): Observable<Bloque[]> {
    return this.http.get<Bloque[]>(this.url + "libro/" + libroId);
  }

}
