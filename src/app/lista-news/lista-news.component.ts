import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { New } from '../model/news';
import { Videogioco } from '../model/videogiochi';
import { NewsService } from '../service/news.service';
import { VideogiochiService } from '../service/videogiochi.service';

@Component({
  selector: 'app-lista-news',
  templateUrl: './lista-news.component.html',
  styleUrls: ['./lista-news.component.css']
})
export class ListaNewsComponent implements OnInit{
  
  listaNew$ !: Observable<New[]>;
  listaVideogiochi$!: Observable<Videogioco[]>;

  constructor(private newsService: NewsService, private videogiochiService: VideogiochiService) {}
  
  ngOnInit(): void {
    this.listaNew$ = this.newsService.getNews()
    this.listaVideogiochi$ = this.videogiochiService.getVideogiochi();
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
