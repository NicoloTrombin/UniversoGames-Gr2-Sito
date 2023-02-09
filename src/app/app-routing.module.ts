import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaReviewComponent } from './lista-review/lista-review.component';
import { ListaVideogiochiComponent } from './lista-videogiochi/lista-videogiochi.component';

const routes: Routes = [
  {
    path: 'reviews',
    component: ListaReviewComponent
  },
  {
    path: 'catalogo',
    component: ListaVideogiochiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
