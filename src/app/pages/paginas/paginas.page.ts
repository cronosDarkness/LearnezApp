import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BloqueService } from "src/app/shared/services/bloque.service";
import { PaginaService } from "src/app/shared/services/pagina.service";
import { Bloque } from "src/app/shared/models/bloque.model";
import { Pagina } from "src/app/shared/models/pagina.model";

@Component({
  selector: "app-paginas",
  templateUrl: "./paginas.page.html",
  styleUrls: ["./paginas.page.scss"],
})
export class PaginasPage implements OnInit {
  constructor(
    public activatedRoute: ActivatedRoute,
    public bloqueService: BloqueService,
    public paginaService: PaginaService
  ) {}

  bloque: Bloque;
  pagina: Pagina;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.getBloque(parseInt(params.get("bloque-id")));

      this.getPagina(parseInt(params.get("pagina-id")));
    });
  }

  async getBloque(bloqueId: number) {
    this.bloqueService.getBloque(bloqueId).subscribe((response: Bloque) => {
      this.bloque = response;
      console.log(this.bloque);
    });
  }

  async getPagina(paginaId: number) {
    this.paginaService.getPagina(paginaId).subscribe((response: Pagina) => {
      this.pagina = response;
      console.log(this.pagina);
    });
  }
}
