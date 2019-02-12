import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { ListasDePortfoliosComponent } from "./listas-de-portfolios/listas-de-portfolios.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BodyPrincipalComponent } from "./body-principal/body-principal.component";
import { AltaYBajaComponent } from "./alta-ybaja/alta-ybaja.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListasDePortfoliosComponent,
    HeaderComponent,
    FooterComponent,
    BodyPrincipalComponent,
    AltaYBajaComponent,
    HomeComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
