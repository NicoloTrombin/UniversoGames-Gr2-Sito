import { Injectable } from '@angular/core';
import { NewReview, Review } from '../model/review';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  private apiUrl = 'http://localhost:3000/reviews';

  constructor(private http: HttpClient) {}

  getReviews() {
    return this.http.get<Review[]>(this.apiUrl);
  }

  getReview(id: string) {
    return this.http.get<Review>(`${this.apiUrl}/${id}`);
  }

  addReview(newReview: NewReview) {
    return this.http.post(this.apiUrl, newReview);
  }

  updateReview(review: Review) {
    return this.http.put(this.apiUrl, review);
  }

  eliminaReview(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
