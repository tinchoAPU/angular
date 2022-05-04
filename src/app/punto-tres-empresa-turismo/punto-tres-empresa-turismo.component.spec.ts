import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoTresEmpresaTurismoComponent } from './punto-tres-empresa-turismo.component';

describe('PuntoTresEmpresaTurismoComponent', () => {
  let component: PuntoTresEmpresaTurismoComponent;
  let fixture: ComponentFixture<PuntoTresEmpresaTurismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntoTresEmpresaTurismoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoTresEmpresaTurismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
