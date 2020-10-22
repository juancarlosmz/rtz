import { TestBed } from '@angular/core/testing';

import { RtzservicesService } from './rtzservices.service';

describe('RtzservicesService', () => {
  let service: RtzservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RtzservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
