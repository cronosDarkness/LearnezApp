import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Bloque } from "src/app/shared/models/bloque.model";
import { BloqueService } from "src/app/shared/services/bloque.service";
import { ExamenService } from "src/app/shared/services/examen.service";


@Component({
  selector: 'app-examen',
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
})
export class ExamenPage implements OnInit {

  constructor
  (
    public activatedRoute: ActivatedRoute,
    public route: Router,
    public bloqueService: BloqueService,
    public examenService: ExamenService,
    public router: Router
  ) { }

  bloque: Bloque;

  bloqueId: number;
  libroId: number;
  gradoId: number;
  

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.bloqueId = parseInt(params.get("bloque-id"));
      this.getBloque(this.bloqueId);
      this.getExamen(this.bloqueId);
    });
  }

  getBloque(bloqueId: number) {
    this.bloqueService.getBloque(bloqueId).subscribe((response: Bloque) => {
      this.bloque = response;
      this.libroId = this.bloque.libro.libroId;
    });
  }

  // getExamen(bloqueId: number) {
  //   this.examenService
  //     .getExamen(bloqueId)
  //     .subscribe((response: Examen[]) => {
  //       this.examen = response;
  //     });
  // }

  getExamen(bloqueId: number) {
    this.router.navigate(["/Bloque", bloqueId, this.bloqueId]);
  }

  regresar() {
    this.route.navigateByUrl("/libros/" + this.gradoId);
  }

}
