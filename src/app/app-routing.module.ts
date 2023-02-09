import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaReviewComponent } from './lista-review/lista-review.component';

const routes: Routes = [
  {
    path: 'reviews',
    component: ListaReviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
