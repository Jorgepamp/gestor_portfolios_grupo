import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ListasDePortfoliosComponent } from './listas-de-portfolios/listas-de-portfolios.component';
=======
import { FooterComponent } from './footer/footer.component';
>>>>>>> f06efceccec111094db07d2e1642c52ebf98b048

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ListasDePortfoliosComponent
=======
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
