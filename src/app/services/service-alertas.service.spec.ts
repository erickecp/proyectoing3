import { TestBed } from '@angular/core/testing';

import { ServiceAlertasService } from './service-alertas.service';

describe('ServiceAlertasService', () => {
  let service: ServiceAlertasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAlertasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
