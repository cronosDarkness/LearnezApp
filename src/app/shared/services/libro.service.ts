import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Libro } from "../models/libro.model";

@Injectable({
  providedIn: "root",
})
export class LibroService {
  constructor(public http: HttpClient) {}

  url = "http://localhost:6045/api/libros";

  getLibrosPorGrado(grado: number): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.url + '/porgrado/' + grado);
  }
}
