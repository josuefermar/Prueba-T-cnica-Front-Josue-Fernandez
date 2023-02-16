import { TestBed } from '@angular/core/testing';

import { UserPromisesService } from './user-promises.service';

describe('UserPromisesService', () => {
  let service: UserPromisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPromisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
