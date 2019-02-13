import { Injectable } from "@angular/core";
import { Portfolio } from "./portfolio";

@Injectable()
export class CambioMenuService {
  lista: Array<Portfolio>;
  constructor() {
    console.log("<<< CREANDO SERVICIO >>>");
    this.lista = new Array<Portfolio>();
  }
  public alta(nombre: string, desc: string, fich: string): void {
    let nuevoPortfolio: Portfolio;
    nuevoPortfolio = new Portfolio(nombre, desc, fich);
    this.lista.push(nuevoPortfolio); // se añade el nuevo objeto que hemos creado al array Portfolio
    console.log("<<< ALTA PORTFOLIO " + nombre + ">>>");
  }
  public baja(nombre: string) {
    for (var i = 0; i < this.lista.length; i++) {
      if (
        this.lista[i].getNombre().toLocaleLowerCase() ==
        nombre.toLocaleLowerCase()
      ) {
        this.lista.splice(i, 1);
      }
    }
    console.log("<<< BAJA PORTFOLIO " + nombre + ">>>");
    return;
  }
  public listar(): Array<Portfolio> {
    return this.lista;
  }
}
