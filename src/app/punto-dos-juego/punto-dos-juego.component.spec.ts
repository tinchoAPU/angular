import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoDosJuegoComponent } from './punto-dos-juego.component';

describe('PuntoDosJuegoComponent', () => {
  let component: PuntoDosJuegoComponent;
  let fixture: ComponentFixture<PuntoDosJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntoDosJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoDosJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
