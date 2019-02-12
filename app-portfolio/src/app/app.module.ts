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
>>>>>>> d208b0045a8054babe1210e1e136e3c56057bacf

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ListasDePortfoliosComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
=======
    HeaderComponent,
    ListasDePortfoliosComponent,
    HeaderComponent,
    FooterComponent
>>>>>>> d208b0045a8054babe1210e1e136e3c56057bacf
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
