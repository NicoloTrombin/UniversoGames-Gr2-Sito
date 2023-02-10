import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { New } from '../model/news';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-lista-news',
  templateUrl: './lista-news.component.html',
  styleUrls: ['./lista-news.component.css']
})
export class ListaNewsComponent implements OnInit{
  
  listaNew$ !: Observable<New[]>;

  constructor(private newsService: NewsService) {}
  
  ngOnInit(): void {
    this.listaNew$ = this.newsService.getNews()
  }
  
}
