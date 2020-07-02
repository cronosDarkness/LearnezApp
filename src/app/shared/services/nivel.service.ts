import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nivel } from '../models/nivel.model';

@Injectable({
  providedIn: 'root'
})
export class NivelService {

  constructor(public http: HttpClient) { }

  url = 'http://localhost:6045/api/niveles/';

  getNiveles(): Observable<Nivel[]> {
    return this.http.get<Nivel[]>(this.url);
  }

}
