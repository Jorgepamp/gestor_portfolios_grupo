import { Component, OnInit } from "@angular/core";
import { CambioMenuService } from "app/cambio-menu.service";
import { Portfolio } from "app/portfolio";

@Component({
  selector: "app-listas-de-portfolios",
  templateUrl: "./listas-de-portfolios.component.html",
  styleUrls: ["./listas-de-portfolios.component.css"]
})
export class ListasDePortfoliosComponent implements OnInit {
  arrayPortfolios: Array<Portfolio>;
  constructor(private servicioP: CambioMenuService) {}

  ngOnInit() {
    this.arrayPortfolios = this.servicioP.listar();
  }
}
