import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ExamenService } from "src/app/shared/services/examen.service";
import { Examen } from "src/app/shared/models/examen.model";
import { PreguntasExamenService } from "src/app/shared/services/preguntas-examen.service";
import { PreguntaExamen } from "src/app/shared/models/PreguntaExamen.model";

@Component({
  selector: "app-examen",
  templateUrl: "./examen.page.html",
  styleUrls: ["./examen.page.scss"],
})
export class ExamenPage implements OnInit {
  constructor(
    public activatedRoute: ActivatedRoute,
    public examenService: ExamenService,
    public preguntasExamenService: PreguntasExamenService,
    public router: Router
  ) {}

  bloqueId: number;
  examen: Examen;
  preguntaExamen: PreguntaExamen = new PreguntaExamen();
  preguntaActual: number;
  maximoPreguntas: number;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.bloqueId = parseInt(params.get("bloque-id"));
      this.obtenerExamen();
    });
  }

  // Se obtiene el examen
  obtenerExamen() {
    this.examenService.getExamen(this.bloqueId).subscribe(
      (response: Examen) => {
        this.examen = response;

        this.maximoPreguntas = response.numPreguntas;
        this.preguntaActual = 1;

        // Al mismo tiempo obtenemos la primera pregunta del examen
        this.preguntasExamenService
          .getPreguntaExamen(this.examen.examenId, this.preguntaActual)
          .subscribe(
            (response) => {
              this.preguntaExamen = response;
            },
            (error) => {
              console.log(error);
            }
          );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Se obtiene la siguiente pregunta del examen
  siguientePregunta() {

    if(this.preguntaActual < this.maximoPreguntas) {
      this.preguntaActual += 1;
    }

    this.preguntasExamenService
      .getPreguntaExamen(this.examen.examenId, this.preguntaActual)
      .subscribe(
        (response) => {
          this.preguntaExamen = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  regresar() {
    this.router.navigateByUrl(
      "bloques/" + this.bloqueId + "/" + this.examen.bloque.libro.grado.gradoId
    );
  }

  goHome() {
    this.router.navigateByUrl("/home");
  }
}
