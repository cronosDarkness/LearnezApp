import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pagina } from '../models/pagina.model';

@Injectable({
  providedIn: 'root'
})
export class PaginaService {

  constructor(public http: HttpClient) { }

  url = "http://localhost:6045/api/paginas/"

  // Obtiene la pagina y respuestas asociadas, recibe paginaId
  public getPagina(paginaId: number): Observable<Pagina> {
      return this.http.get<Pagina>(this.url + paginaId);
  }
  
}
