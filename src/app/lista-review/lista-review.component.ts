import { Component, HostListener, OnInit } from '@angular/core';
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

  isShow: boolean = false;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
