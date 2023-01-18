import { TestBed } from '@angular/core/testing';

import { AuthguardDeactivateService } from './authguard-deactivate.service';

describe('AuthguardDeactivateService', () => {
  let service: AuthguardDeactivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthguardDeactivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
