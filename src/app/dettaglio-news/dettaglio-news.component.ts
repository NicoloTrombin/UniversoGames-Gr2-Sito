import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { New } from '../model/news';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-dettaglio-news',
  templateUrl: './dettaglio-news.component.html',
  styleUrls: ['./dettaglio-news.component.css']
})
export class DettaglioNewsComponent {

  listaNew$ !: Observable<New>;
  
  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id){
        this.listaNew$ = this.newsService.getNew(id);
      }
    })
  }
}
