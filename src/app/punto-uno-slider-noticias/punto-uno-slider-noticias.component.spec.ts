import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoUnoSliderNoticiasComponent } from './punto-uno-slider-noticias.component';

describe('PuntoUnoSliderNoticiasComponent', () => {
  let component: PuntoUnoSliderNoticiasComponent;
  let fixture: ComponentFixture<PuntoUnoSliderNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntoUnoSliderNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoUnoSliderNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
