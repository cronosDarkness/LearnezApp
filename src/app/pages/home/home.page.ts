import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NivelService } from "src/app/shared/services/nivel.service";
import { Nivel } from 'src/app/shared/models/nivel.model';

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  niveles: Nivel[];
  constructor(
    public router: Router,
    public nivelService: NivelService
    ) {}

  ngOnInit() {
    this.nivelService.getNiveles().subscribe( (response: Nivel[])=> {
      this.niveles = response;
    },(error) => {
      console.log(error);
    });
  }

  verLibrosPorGrado(grado) {
    this.router.navigate(["/libros", grado]);
  }
}
