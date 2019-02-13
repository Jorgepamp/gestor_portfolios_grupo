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
import { RouterModule, Routes } from "@angular/router";
import { EliminarComponent } from './eliminar/eliminar.component';

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "listado", component: ListasDePortfoliosComponent },
  { path: "alta", component: AltaYBajaComponent },

  { path: "", redirectTo: "/home", pathMatch: "full" }
];

/* {  path: 'listado',
    component: ListasDePortfoliosComponent,
    data: { title: 'Lista Portfolio' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListasDePortfoliosComponent,
    HeaderComponent,
    FooterComponent,
    BodyPrincipalComponent,
    AltaYBajaComponent,
    HomeComponent,
    EliminarComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
