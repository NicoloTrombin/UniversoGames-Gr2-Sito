import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ListaReviewComponent } from './lista-review/lista-review.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ListaNewsComponent } from './lista-news/lista-news.component';
import { ListaVideogiochiComponent } from './lista-videogiochi/lista-videogiochi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DettaglioVideogiocoComponent } from './dettaglio-videogioco/dettaglio-videogioco.component';
import { DettaglioNewsComponent } from './dettaglio-news/dettaglio-news.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ListaReviewComponent,
    HeaderComponent,
    ListaNewsComponent,
    ListaVideogiochiComponent,
    DettaglioVideogiocoComponent,
    DettaglioNewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
