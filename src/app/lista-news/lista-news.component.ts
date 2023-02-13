import { Component, OnInit } from '@angular/core';
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
  
}
