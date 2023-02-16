import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { New } from "../model/news";

@Injectable ({providedIn: 'root'})
export class NewsService {

    private apiUrl = 'https://project-works-rest-api.onrender.com/api/v1/GROUP-II/news';

    constructor(private http: HttpClient) {}

    listaNews$ !: Observable<New[]>;

    getNews() {
        this.listaNews$ = this.http.get<New[]>(this.apiUrl);
      
        return this.listaNews$;
    }

    getNew(id: string) {
        return this.http.get<New>(`${this.apiUrl}/${id}`);
    }

    ricercaKey(keyword: string) {
        keyword = keyword.toLowerCase().trim();
        const newsTrovate = this.listaNews$.pipe(
          map((data) => {
            return data.filter((n: New) => {
              return (
                n.title.toLowerCase().includes(keyword) ||
                n.category.toLowerCase().includes(keyword) ||
                n.publicationDate.toLowerCase().includes(keyword) ||
                n.authorName.toLowerCase().includes(keyword) 
              );
            });
          })
        );
        return newsTrovate;
      }
    
      filtraCategorie(
        categorieSelezionate: string[] | string,
        news$: Observable<New[]>
      ) {
        const newsTrovate = news$.pipe(
          map((data) => {
            return data.filter((v: New) => {
              let trovato = false;
              if (typeof categorieSelezionate != 'string') {
                categorieSelezionate.forEach((element) => {
                  if (v.category.toLowerCase().includes(element.toLowerCase())) {
                    trovato = true;
                  }
                });
              }
              return trovato;
            });
          })
        );
    
        let vuoto = false;
        newsTrovate
          .pipe(
            map((data) => {
              if (data.length < 1) {
                vuoto = true;
              }
            })
          )
          .subscribe();
    
        if (vuoto) {
          return news$;
        }
        return newsTrovate;
      }
    
}