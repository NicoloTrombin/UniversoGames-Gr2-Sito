import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Videogioco } from '../model/videogiochi';
import { VideogiochiService } from '../service/videogiochi.service';

@Component({
  selector: 'app-dettaglio-videogioco',
  templateUrl: './dettaglio-videogioco.component.html',
  styleUrls: ['./dettaglio-videogioco.component.css']
})
export class DettaglioVideogiocoComponent implements OnInit {

  listaVideogiochi$!: Observable<Videogioco>;
  
  constructor(private videogiochiService: VideogiochiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id){
        this.listaVideogiochi$ = this.videogiochiService.getVideogioco(id)
      }
    })
  }

}
