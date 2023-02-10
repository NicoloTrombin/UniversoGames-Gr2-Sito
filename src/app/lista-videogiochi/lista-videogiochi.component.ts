import { Component, OnInit } from '@angular/core';
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
  }
}
