import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioNewsComponent } from './dettaglio-news.component';

describe('DettaglioNewsComponent', () => {
  let component: DettaglioNewsComponent;
  let fixture: ComponentFixture<DettaglioNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
