import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Categoria } from '../model/categoria';
import { New } from '../model/news';
import { CategorieService } from '../service/categorie.service';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-list-all-news',
  templateUrl: './list-all-news.component.html',
  styleUrls: ['./list-all-news.component.css']
})
export class ListAllNewsComponent implements OnInit{

  listaNew$ !: Observable<New[]>;

  keyRicerca = '';
  categorie = new FormControl('');

  btnXbox = false;
  btnPs3 = false;
  btnPs4 = false;
  btnPs5 = false;
  btnGameCube = false;

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

  // Ricerca
  ricerca() {
    this.listaNew$ = this.newsService.ricercaKey(this.keyRicerca);
    this.filtaPer(this.listaNew$)
  }

  filtaPer(list: Observable<New[]>) {
    let categories : string[] = [];
    if(this.btnXbox) {
      categories.push('XBOX')
    }
    if(this.btnPs3) {
      categories.push('PS3')
    }
    if(this.btnPs4) {
      categories.push('PS4')
    }
    if(this.btnPs5) {
      categories.push('PS5')
    }
    if(this.btnGameCube) {
      categories.push('Game Cube')
    }

    if(categories.length == 0 ) {
        return;
    }

    this.listaNew$ = this.newsService.filtraCategorie(categories, list);
  }

  refreshNews() {
    this.listaNew$ = this.newsService.getNews();
  }


}
