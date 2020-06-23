import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LibroService } from "src/app/shared/services/libros.service";
import { Libro } from "src/app/shared/models/libro.model";

@Component({
  selector: "app-libros",
  templateUrl: "./libros.page.html",
  styleUrls: ["./libros.page.scss"],
})
export class LibrosPage implements OnInit {
  Libros: Libro[];
  grado: string;
  hayLibros: boolean;

  constructor(
    public activatedRoute: ActivatedRoute,
    public libroService: LibroService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      
      this.grado = param.get("id");

      this.libroService.getLibrosPorGrado(parseInt(this.grado)).subscribe((response: Libro[]) => {
        
        this.Libros = response;
        
        if (this.Libros.length > 0) {
          this.hayLibros = true;
        
        } else {  
          this.hayLibros = false;

        }
      }); // lbservice
    }); // activeRoute
  } // onInit


}
