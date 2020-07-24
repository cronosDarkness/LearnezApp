import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Examen } from '../models/examen.model';

@Injectable({
  providedIn: 'root'
})
export class ExamenService
{

  constructor(public http: HttpClient) { }

  url = "http://localhost:6045/api/examenes/bloque/";

  getExamen(bloqueId: number): Observable<Examen> {
    return this.http.get<Examen>(this.url + bloqueId);
    
  }

}
