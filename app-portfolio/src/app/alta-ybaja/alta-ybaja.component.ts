import { Component, OnInit } from "@angular/core";
import { CambioMenuService } from "app/cambio-menu.service";

@Component({
  selector: "app-alta-ybaja",
  templateUrl: "./alta-ybaja.component.html",
  styleUrls: ["./alta-ybaja.component.css"]
})
export class AltaYBajaComponent implements OnInit {
  titulo: string;

  etiqueta_nombre: string;
  etiqueta_descripcion: string;
  etiqueta_archivo: string;

  placeholder_nombre: string;
  placeholder_descripcion: string;
  placeholder_archivo: string;

  nombreIntroducido: string;
  descripcionIntroducido: string;
  archivoIntroducido: string;

  servPortfolio: CambioMenuService;

  constructor(sp: CambioMenuService) {
    this.servPortfolio = sp;
  }

  ngOnInit() {
    // Método correspondiente al evento al iniicializar el componente
    this.titulo = "Alta de portfolios";
    this.etiqueta_nombre = "Nombre y Apellidos";
    this.placeholder_nombre = "Introduzca Nombre y Apellidos";
    // this.nombreIntroducido = "Voldemort";
    this.etiqueta_descripcion = "Descripción";
    this.placeholder_descripcion = "Introduzca una descripción";
    this.etiqueta_archivo = "Archivo";
    this.placeholder_archivo = "Introduzca un archivo";
  }
  limpiar() {
    this.nombreIntroducido = "";
    this.descripcionIntroducido = "";
    this.archivoIntroducido = "";
    console.log("<<< Se limpia los campos >>>");
  }
  darAlta() {
    this.servPortfolio.alta(
      this.nombreIntroducido,
      this.descripcionIntroducido,
      this.archivoIntroducido
    );
    this.limpiar();
    console.log("<<< Está dado de alta >>>");
  }
}
