import { Component, OnInit } from '@angular/core';
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


}
