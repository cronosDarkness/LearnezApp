import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Bloque } from "src/app/shared/models/bloque.model";
import { BloqueService } from "src/app/shared/services/bloque.service";

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

      this.bloqueService
        .getBloquesPorLibro(parseInt(param.get("libro-id")))
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
    this.route.navigate(["/bloque/", bloqueId]);
  }

  addPage() {
    this.route.navigateByUrl("/add-page");
  }

  regresar() {
    this.route.navigateByUrl("/libros/" + this.gradoId);
  }
}
