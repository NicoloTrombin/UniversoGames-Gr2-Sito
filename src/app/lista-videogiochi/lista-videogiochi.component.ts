import { Component, HostListener, OnInit } from '@angular/core';
import { Videogioco, Linguaggio } from '../model/videogiochi';
import { VideogiochiService } from '../service/videogiochi.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-lista-videogiochi',
  templateUrl: './lista-videogiochi.component.html',
  styleUrls: ['./lista-videogiochi.component.css']
})
export class ListaVideogiochiComponent {

  listaVideogiochi$!: Observable<Videogioco[]>;
  keyRicerca = '';
  categorie = new FormControl('');

  btnXbox = false;
  btnPs3 = false;
  btnPs4 = false;
  btnPs5 = false;
  btnPC = false;

  constructor(private videogiochiService: VideogiochiService) {}

  ngOnInit(): void {
    this.listaVideogiochi$ = this.videogiochiService.getVideogiochi();
    console.log(this.listaVideogiochi$);
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

  // Ricerca
  ricerca() {
    this.listaVideogiochi$ = this.videogiochiService.ricercaKey(this.keyRicerca);
    this.filtaPer(this.listaVideogiochi$)
  }

  filtaPer(list: Observable<Videogioco[]>) {
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
    if(this.btnPC) {
      categories.push('PC')
    }

    if(categories.length == 0 ) {
        return;
    }

    this.listaVideogiochi$ = this.videogiochiService.filtraCategorie(categories, list);
  }

  refreshNews() {
    this.listaVideogiochi$ = this.videogiochiService.getVideogiochi();
  }
}
