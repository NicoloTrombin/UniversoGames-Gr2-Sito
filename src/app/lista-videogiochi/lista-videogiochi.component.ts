import { Component, HostListener, OnInit } from '@angular/core';
import { Videogioco, Linguaggio } from '../model/videogiochi';
import { VideogiochiService } from '../service/videogiochi.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-lista-videogiochi',
  templateUrl: './lista-videogiochi.component.html',
  styleUrls: ['./lista-videogiochi.component.css']
})
export class ListaVideogiochiComponent {

  listaVideogiochi$!: Observable<Videogioco[]>;

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
}
