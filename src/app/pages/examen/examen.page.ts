import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ExamenService } from "src/app/shared/services/examen.service";
import { Examen } from 'src/app/shared/models/examen.model';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
})
export class ExamenPage implements OnInit {

  constructor(
    public activatedRoute: ActivatedRoute,
    public examenService: ExamenService,
    public router: Router
  ) { }

  bloqueId: number;
  examen: Examen;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.bloqueId = parseInt(params.get("bloque-id"));

      // Se obtiene el examen
      this.examenService.getExamen(this.bloqueId).subscribe((response: Examen)=> {
        this.examen = response;

        console.log(this.examen.examenId);


      }, (error) => {
        console.log(error)
      });

    });
  }

  regresar() {
    this.router.navigateByUrl("bloques/" + this.examen.bloque.bloqueId + "/" + this.examen.bloque.libro.grado.gradoId);
  }

}
