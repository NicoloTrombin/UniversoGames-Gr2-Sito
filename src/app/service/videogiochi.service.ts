import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Videogioco, Linguaggio } from '../model/videogiochi';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class VideogiochiService{
    private apiUrl = 'http://localhost:3000/videogames';

    constructor(private http: HttpClient) {}

    listaVideogiochi$ !: Observable<Videogioco[]>;

    getVideogiochi() {
       this.listaVideogiochi$ = this.http.get<Videogioco[]>(this.apiUrl);

       return this.listaVideogiochi$;
    }

    getVideogioco(id: string): Observable<Videogioco> {
        return this.http.get<Videogioco>(this.apiUrl + '/' + id);
    }

    ricercaKey(keyword: string) {
        keyword = keyword.toLowerCase().trim();
        const videogiochiTrovati = this.listaVideogiochi$.pipe(
          map((data) => {
            return data.filter((v: Videogioco) => {
              return (
                v.title.toLowerCase().includes(keyword) ||
                v.category.toLowerCase().includes(keyword) ||
                v.publisher.toLowerCase().includes(keyword) ||
                v.softwareHouse.toLowerCase().includes(keyword) ||
                v.genre.toLocaleLowerCase().includes(keyword)
              );
            });
          })
        );
        return videogiochiTrovati;
      }

      filtraCategorie(
        categorieSelezionate: string[] | string,
        gioco$: Observable<Videogioco[]>
      ) {
        const videogiochiTrovati = gioco$.pipe(
          map((data) => {
            return data.filter((v: Videogioco) => {
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
        videogiochiTrovati
          .pipe(
            map((data) => {
              if (data.length < 1) {
                vuoto = true;
              }
            })
          )
          .subscribe();
    
        if (vuoto) {
          return gioco$;
        }
        return videogiochiTrovati;
      }

}