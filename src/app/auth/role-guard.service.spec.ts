import { TestBed, inject } from '@angular/core/testing';

import { RoleGuardService } from './role-guard.service';

describe('RoleGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleGuardService]
    });
  });

  it('should be created', inject([RoleGuardService], (service: RoleGuardService) => {
    expect(service).toBeTruthy();
  }));
});
