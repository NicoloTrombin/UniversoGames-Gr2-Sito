import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioVideogiocoComponent } from './dettaglio-videogioco.component';

describe('DettaglioVideogiocoComponent', () => {
  let component: DettaglioVideogiocoComponent;
  let fixture: ComponentFixture<DettaglioVideogiocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioVideogiocoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioVideogiocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
