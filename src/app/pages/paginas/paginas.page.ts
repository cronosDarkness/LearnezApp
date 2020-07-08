import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    public paginaService: PaginaService,
    public router: Router,
  ) {}

  bloque: Bloque;
  pagina: Pagina;
  backDirection: string;
  btnDisable: boolean;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.getBloque(parseInt(params.get("bloque-id")));
      this.backDirection = "bloques/" + params.get("bloque-id");

      this.getPagina(parseInt(params.get("num-pag")), parseInt(params.get("bloque-id")) );
    });
  }

  async getBloque(bloqueId: number) {
    this.bloqueService.getBloque(bloqueId).subscribe((response: Bloque) => {
      this.bloque = response;
      console.log(this.bloque);
    });
  }

  async getPagina(numPagina: number, bloqueId: number) {
    this.paginaService.getPagina(numPagina, bloqueId).subscribe((response: Pagina) => {
      this.pagina = response;
      console.log(this.pagina);
    });
  }

  public nextPage(numPagina: number, bloqueId: number) {
    this.router.navigate(["paginas", numPagina + 1, "bloque", bloqueId]);
  }
}
