import { TestBed } from '@angular/core/testing';

import { PrinterDataService } from './printer-data.service';

describe('PrinterDataService', () => {
  let service: PrinterDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrinterDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
