import { TestBed } from '@angular/core/testing';

import { RxjserviceService } from './rxjservice.service';

describe('RxjserviceService', () => {
  let service: RxjserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
