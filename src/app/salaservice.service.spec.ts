import { TestBed } from '@angular/core/testing';

import { SalaserviceService } from './salaservice.service';

describe('SalaserviceService', () => {
  let service: SalaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
