import { TestBed } from '@angular/core/testing';

import { FakeStoreAPIServiceService } from './fake-store-apiservice.service';

describe('FakeStoreAPIServiceService', () => {
  let service: FakeStoreAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeStoreAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
