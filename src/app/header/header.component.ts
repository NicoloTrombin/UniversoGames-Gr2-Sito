import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  selectedPath = 'home';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e) => e instanceof RoutesRecognized))
      .subscribe((val: any) => {
        this.selectedPath = val.urlAfterRedirects.split('/')[1];;
        console.log(this.selectedPath);
      });
  }

 

  
}
