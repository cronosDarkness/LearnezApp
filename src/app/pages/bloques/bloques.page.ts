import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Bloque } from "src/app/shared/models/bloque.model";
import { BloqueService } from "src/app/shared/services/bloque.service";
import { ExamenService } from "src/app/shared/services/examen.service";

@Component({
  selector: "app-bloques",
  templateUrl: "./bloques.page.html",
  styleUrls: ["./bloques.page.scss"],
})
export class BloquesPage implements OnInit {
  bloques: Bloque[];
  libroId: number;
  gradoId: number;
  constructor(
    public activatedRoute: ActivatedRoute,
    public bloqueService: BloqueService,
    public route: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.libroId = parseInt(param.get("libro-id"));
      this.gradoId = parseInt(param.get("grado-id"));

      // Se obtienen todos los bloques del libro
      this.bloqueService
        .getBloquesPorLibro(this.libroId)
        .subscribe(
          (response: Bloque[]) => {
            this.bloques = response;
          },
          (error) => {
            console.log(error);
          }
        );
    });
  }

  irPagina(numPagina: number, bloqueId: number) {
    this.route.navigate(["bloque", bloqueId, "pagina", numPagina]);
  }

  irExamen(bloqueId: number) {
    this.route.navigate(["/examen", bloqueId]);
  }

  regresar() {
    this.route.navigateByUrl("/libros/" + this.gradoId);
  }
}
