import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BloqueService } from "src/app/shared/services/bloque.service";
import { PaginaService } from "src/app/shared/services/pagina.service";
import { Bloque } from "src/app/shared/models/bloque.model";
import { Pagina } from "src/app/shared/models/pagina.model";
import { ModalController } from "@ionic/angular";
import { ImageModalPage } from "../image-modal/image-modal.page";

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
    public modalController: ModalController
  ) {}

  bloque: Bloque;
  pagina: Pagina;

  numPagina: number;
  bloqueId: number;
  libroId: number;

  btnPrevPageDisable: boolean;
  btnNextPageDisable: boolean;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.numPagina = parseInt(params.get("num-pag"));
      this.bloqueId = parseInt(params.get("bloque-id"));

      this.getBloque(this.bloqueId);
      this.getPagina(this.numPagina, this.bloqueId);
    });
  }

  getBloque(bloqueId: number) {
    this.bloqueService.getBloque(bloqueId).subscribe((response: Bloque) => {
      this.bloque = response;
      this.libroId = this.bloque.libro.libroId;

      // pagina actual & inicio de paginas del libro
      if (this.numPagina <= this.bloque.libro.inicioNumPaginas) {
        this.btnPrevPageDisable = true;
      }
      // pagina actual & máximo de paginas del libro
      if (this.numPagina >= this.bloque.libro.numPaginas) {
        this.btnNextPageDisable = true;
      }
    });
  }

  getPagina(numPagina: number, bloqueId: number) {
    this.paginaService
      .getPagina(numPagina, bloqueId)
      .subscribe((response: Pagina) => {
        this.pagina = response;
      });
  }

  regresar() {
    this.router.navigateByUrl("bloques/" + this.libroId);
  }

  // Se navega a la siguiente página
  public nextPage() {
    this.router.navigate([
      "bloque",
      this.bloqueId,
      "pagina",
      this.numPagina + 1,
    ]);
  }

  // Se navega a la página anterior
  public previousPage() {
    this.router.navigate([
      "bloque",
      this.bloqueId,
      "pagina",
      this.numPagina - 1,
    ]);
  }

  async openPreview(imgLibro, imgPagina) {
    const modal = await this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        imgLibro: imgLibro,
        imgPagina: imgPagina,
      },
    });
    return await modal.present();
  }
}
