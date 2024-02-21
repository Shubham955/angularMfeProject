import { TestBed } from '@angular/core/testing';

import { InsuranceManipulationService } from './insurance-manipulation.service';

describe('InsuranceManipulationService', () => {
  let service: InsuranceManipulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceManipulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
