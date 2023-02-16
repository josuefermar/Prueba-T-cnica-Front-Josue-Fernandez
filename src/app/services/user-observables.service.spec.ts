import { TestBed } from '@angular/core/testing';

import { UserObservablesService } from './user-observables.service';

describe('UserObservablesService', () => {
  let service: UserObservablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserObservablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
