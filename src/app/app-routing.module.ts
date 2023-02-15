import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioNewsComponent } from './dettaglio-news/dettaglio-news.component';
import { DettaglioVideogiocoComponent } from './dettaglio-videogioco/dettaglio-videogioco.component';
import { ListAllNewsComponent } from './list-all-news/list-all-news.component';
import { ListaNewsComponent } from './lista-news/lista-news.component';
import { ListaReviewComponent } from './lista-review/lista-review.component';
import { ListaVideogiochiComponent } from './lista-videogiochi/lista-videogiochi.component';

const routes: Routes = [
  {
    path: '',
    component: ListaNewsComponent
  },
  {
    path: 'lista-news',
    component: ListAllNewsComponent
  },
  {
    path: 'dettaglio-news/:id',
    component: DettaglioNewsComponent
  },
  {
    path: 'reviews',
    component: ListaReviewComponent
  },
  {
    path: 'catalogo',
    component: ListaVideogiochiComponent
  },
  {
    path: 'dettaglio/:id',
    component: DettaglioVideogiocoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
