import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  grade = [
    {
      grade: "1",
      color: "#42AE18"
    },
    {
      grade: "2",
      color: "#F39317"
    },
    {
      grade: "3",
      color: "#8D33AA"
    },
    {
      grade: "4",
      color: "#D74726"
    },
    {
      grade: "5",
      color: "#00A1DE"
    },
    {
      grade: "6",
      color: "#00B971"
    },
  ];

  constructor(
    public router: Router
    ) { }

  verLibrosPorGrado(grado: string) {
    this.router.navigate(["/libros", parseInt(grado)]);
  }

  ngOnInit() {}
}
