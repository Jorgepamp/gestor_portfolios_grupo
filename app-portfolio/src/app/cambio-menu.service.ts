import { Injectable } from "@angular/core";
import { Portfolio } from "./portfolio";

@Injectable()
export class CambioMenuService {
  lista: Array<Portfolio>;
  constructor() {
    console.log("<<< CREANDO SERVICIO >>>");
    this.lista = new Array<Portfolio>();
  }
  public alta(nombre: string, desc: string, fich: string): string {
    if (nombre == "" || typeof nombre == "undefined")
    {
      return 'Nombre mal';
    } else if (desc == "" || typeof desc == "undefined") {
      return 'Descripción mal';
    } else if (fich == "" || typeof fich == "undefined") {
      return 'Fichero mal';
    } 
    let nuevoPortfolio: Portfolio;
    nuevoPortfolio = new Portfolio(nombre, desc, fich);
    //this.lista.push(nuevoPortfolio); // se añade el nuevo objeto que hemos creado al array Portfolio
    console.log("<<< ALTA PORTFOLIO " + nombre + ">>>");
    localStorage.setItem(nombre, JSON.stringify(nuevoPortfolio));
    return "Ok"
  }
  public baja(nombre: string) {
    localStorage.removeItem(nombre);

    // noh ace falta para el localSotrage
    // for (var i = 0; i < this.lista.length; i++) {
    //   if (
    //     this.lista[i].getNombre().toLocaleLowerCase() ==
    //     nombre.toLocaleLowerCase()
    //   ) {
    //     this.lista.splice(i, 1);
    //   }
    // }
    console.log("<<< BAJA PORTFOLIO " + nombre + ">>>");
    return;
  }
  public listar(): Array<Portfolio> {
    this.lista = new Array<Portfolio>();
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      var datosLista = JSON.parse(localStorage.getItem(localStorage.key(i)));
      console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
      this.lista.push(
        new Portfolio(
          datosLista.nombre,
          datosLista.descripcion,
          datosLista.archivo
        )
      );
    }

    return this.lista;
  }
}
