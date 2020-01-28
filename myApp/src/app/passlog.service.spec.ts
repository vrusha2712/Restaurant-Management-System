import { TestBed } from '@angular/core/testing';

import { PasslogService } from './passlog.service';

describe('PasslogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasslogService = TestBed.get(PasslogService);
    expect(service).toBeTruthy();
  });
});
