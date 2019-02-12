import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { ListasDePortfoliosComponent } from './listas-de-portfolios/listas-de-portfolios.component';
=======
=======
import { HeaderComponent } from './header/header.component';
>>>>>>> 2edef62af42122a51a6a02439fdae603d36f8b9f
import { FooterComponent } from './footer/footer.component';
>>>>>>> f06efceccec111094db07d2e1642c52ebf98b048

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent,
=======
<<<<<<< HEAD
<<<<<<< HEAD
    ListasDePortfoliosComponent
=======
=======
    HeaderComponent
>>>>>>> 2edef62af42122a51a6a02439fdae603d36f8b9f
>>>>>>> ecae90e96d6d7580a38fdb9803bba34b830647c0
    FooterComponent
>>>>>>> f06efceccec111094db07d2e1642c52ebf98b048
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
