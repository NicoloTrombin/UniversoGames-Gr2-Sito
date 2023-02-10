import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ListaReviewComponent } from './lista-review/lista-review.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ListaVideogiochiComponent } from './lista-videogiochi/lista-videogiochi.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ListaReviewComponent,
    HeaderComponent,
    ListaVideogiochiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
