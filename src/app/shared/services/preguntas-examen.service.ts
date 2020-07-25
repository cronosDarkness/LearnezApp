import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { PreguntaExamen } from '../models/PreguntaExamen.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class PreguntasExamenService {
  constructor(public http: HttpClient) {}

  url = "http://localhost:6045/api/PreguntasExamen/";

  // Obtiene una pregunta de examen - recibe examenId y numPregunta
  getPreguntaExamen(examenId: number, numPregunta: number): Observable<PreguntaExamen> {
    return this.http.get<PreguntaExamen>(this.url + examenId + "/" + numPregunta);
  }

}
