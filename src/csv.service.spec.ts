import { TestBed } from '@angular/core/testing';

import { CsvService } from './app/services/csv.service';

describe('CsvService', () => {
  let service: CsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
