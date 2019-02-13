import { Component, OnInit } from "@angular/core";
import { CambioMenuService } from "app/cambio-menu.service";
import { Portfolio } from "app/portfolio";

@Component({
  selector: "app-eliminar",
  templateUrl: "./eliminar.component.html",
  styleUrls: ["./eliminar.component.css"]
})
export class EliminarComponent implements OnInit {
  titulo: string;
  etiqueta_nombre: string;
  placeholder_nombre: string;
  nombreIntroducido: string;
  servPortfolio: CambioMenuService;
  private arrayPortfolios: Array<Portfolio>;
  constructor(sp: CambioMenuService) {
    this.servPortfolio = sp;
  }

  ngOnInit() {
    this.titulo = "Baja de portfolios";
    this.etiqueta_nombre = "Nombre y Apellidos";
    this.placeholder_nombre = "Introduzca Nombre y Apellidos";
    this.arrayPortfolios = this.servPortfolio.listar();
  }
  limpiar() {
    this.nombreIntroducido = "";
  }
  darBaja() {
    this.servPortfolio.baja(this.nombreIntroducido);

    console.log("<<< Está dado de baja >>>");
  }
  cambiarCampoForm(nombre: string): void {
    alert(nombre);
  }
}
