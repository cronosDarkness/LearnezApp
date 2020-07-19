import { Component, OnInit } from "@angular/core";
import { Pagina } from "src/app/shared/models/pagina.model";
import { BloqueService } from "src/app/shared/services/bloque.service";
import { Bloque } from "src/app/shared/models/bloque.model";
import { PaginaService } from "src/app/shared/services/pagina.service";
import { AlertController } from "@ionic/angular";
import { PhotoService } from "src/app/shared/services/photo.service";

@Component({
  selector: "app-add-page",
  templateUrl: "./add-page.page.html",
  styleUrls: ["./add-page.page.scss"],
})
export class AddPagePage implements OnInit {
  pagina: Pagina = new Pagina();
  bloques: Bloque[];
  photos = this.photoService.photos;

  constructor(
    public bloqueService: BloqueService,
    public paginaService: PaginaService,
    public alertController: AlertController,
    public photoService: PhotoService
  ) {}

  ngOnInit() {
    this.bloqueService.getBloques().subscribe((reponse: Bloque[]) => {
      this.bloques = reponse;
      console.log(this.bloques);
    });
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  // Button agregarPagina
  agregarPagina(page: Pagina) {
    this.paginaService.postPage(page).subscribe(
      () => {
        this.presentAlert(
          "Hecho.",
          "¡Página agregada!",
          "Los cambios se han llevado a cabo"
        );
      },
      () => {
        this.presentAlert(
          "Error",
          "Problema al agregar la página",
          "Verifique que llenó la información solicitada"
        );
      }
    );
  }

  // presentAlert method
  public async presentAlert(
    action: string,
    indication: string,
    message: string
  ) {
    const alert = await this.alertController.create({
      header: action,
      subHeader: indication,
      message: message,
      buttons: ["OK"],
    });

    await alert.present();
  }
}
