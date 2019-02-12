<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListasDePortfoliosComponent } from './listas-de-portfolios/listas-de-portfolios.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
=======
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { ListasDePortfoliosComponent } from "./listas-de-portfolios/listas-de-portfolios.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
>>>>>>> 7e3fdf6e6ba4eec2e36c728403bba9a292188788

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListasDePortfoliosComponent,
    HeaderComponent,
    FooterComponent
<<<<<<< HEAD
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
=======
>>>>>>> 7e3fdf6e6ba4eec2e36c728403bba9a292188788
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
