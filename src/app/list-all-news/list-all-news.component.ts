import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { New } from '../model/news';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-list-all-news',
  templateUrl: './list-all-news.component.html',
  styleUrls: ['./list-all-news.component.css']
})
export class ListAllNewsComponent implements OnInit{

  listaNew$ !: Observable<New[]>;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.listaNew$ = this.newsService.getNews();
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
