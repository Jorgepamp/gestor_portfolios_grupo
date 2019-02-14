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
  etiqueta_mensaje: string;

  placeholder_nombre: string;
  placeholder_descripcion: string;
  placeholder_archivo: string;
  placeholder_mensaje: string;

  nombreIntroducido: string;
  descripcionIntroducido: string;
  archivoIntroducido: string;
  mensajeIntroducido: string;

  servPortfolio: CambioMenuService;

  constructor(sp: CambioMenuService) {
    this.servPortfolio = sp;
    this.etiqueta_mensaje = ""; 
  }

  ngOnInit() {
    // Método correspondiente al evento al iniicializar el componente
    this.titulo = "Alta de proyectos";
    this.etiqueta_nombre = "Nombre y Apellidos";
    this.placeholder_nombre = "Introduzca Nombre y Apellidos";
    // this.nombreIntroducido = "Voldemort";
    this.etiqueta_descripcion = "Descripción";
    this.placeholder_descripcion = "Introduzca una descripción";
    this.etiqueta_archivo = "Link";
    this.placeholder_archivo = "Introduzca un link";
  }
  limpiar() {
    this.nombreIntroducido = "";
    this.descripcionIntroducido = "";
    this.archivoIntroducido = "";
    this.etiqueta_mensaje = "";
    console.log("<<< Se limpia los campos >>>");
  }
  darAlta() {
    let msg = this.servPortfolio.alta(
      this.nombreIntroducido,
      this.descripcionIntroducido,
      this.archivoIntroducido
    );
    console.log(this.descripcionIntroducido);
    if (msg == "Ok") {
      this.limpiar();
    } else {
      this.etiqueta_mensaje = "Completa todos los campos: " + msg;
     }
    console.log("<<< Está dado de alta >>>");
  }
}
