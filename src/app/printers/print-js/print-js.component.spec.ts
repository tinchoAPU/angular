import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintJsComponent } from './print-js.component';

describe('PrintJsComponent', () => {
  let component: PrintJsComponent;
  let fixture: ComponentFixture<PrintJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
