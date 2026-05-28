import { TestBed } from '@angular/core/testing';

import { ServiceImc } from './service-imc';

describe('ServiceImc', () => {
  let service: ServiceImc;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceImc);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
