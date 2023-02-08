import { Component, OnInit } from '@angular/core';
import { Review } from '../model/review';
import { ReviewsService } from '../service/reviews.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-review',
  templateUrl: './lista-review.component.html',
  styleUrls: ['./lista-review.component.css'],
})
export class ListaReviewComponent implements OnInit {
  listaReview$!: Observable<Review[]>;

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.listaReview$ = this.reviewsService.getReviews();
  }
}
