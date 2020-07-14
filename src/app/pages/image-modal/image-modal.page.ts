import { Component, OnInit } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";

@Component({
  selector: "app-image-modal",
  templateUrl: "./image-modal.page.html",
  styleUrls: ["./image-modal.page.scss"],
})
export class ImageModalPage implements OnInit {
  imgLibro: string;
  imgPagina: string;

  slidesOptions = {
    zoom: {
      maxRatio: 1.5
    }
  };

  constructor(
    public navParams: NavParams,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.imgLibro = this.navParams.get("imgLibro");
    this.imgPagina = this.navParams.get("imgPagina");
  }

  close() {
    this.modalController.dismiss();
  }
}
