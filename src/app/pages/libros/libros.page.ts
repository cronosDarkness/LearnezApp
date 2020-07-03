import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LibroService } from "src/app/shared/services/libro.service";
import { Libro } from "src/app/shared/models/libro.model";
import { LoadingController, AlertController } from "@ionic/angular";

@Component({
  selector: "app-libros",
  templateUrl: "./libros.page.html",
  styleUrls: ["./libros.page.scss"],
})
export class LibrosPage implements OnInit {
  constructor(
    public activatedRoute: ActivatedRoute,
    public libroService: LibroService,
    public router: Router,
    public loadingController: LoadingController,
  ) {}

  libros: Libro[];
  gradoId: string;
  hayLibros: boolean;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.gradoId = param.get("id");
      this.cargarLibros();
    });
  }

  async cargarLibros() {
    // Loading
    const loading = await this.loadingController.create({
      message: "Cargando...",
      spinner: "bubbles",
    });
    await loading.present();

    this.libroService.getLibrosPorGrado(parseInt(this.gradoId)).subscribe(
      (response: Libro[]) => {
        loading.dismiss();

        this.libros = response;

        if (this.libros.length > 0) {
          this.hayLibros = true;
        } else {
          this.hayLibros = false;
        }
      },
      (error) => {
        loading.dismiss();
        console.log(error);
      }
    );
  }

  bloquesPorLibro(libroId: number) {
    this.router.navigate(["/bloques", libroId]);
  }

}
