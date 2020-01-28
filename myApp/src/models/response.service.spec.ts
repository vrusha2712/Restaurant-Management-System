import { TestBed } from '@angular/core/testing';

import { ResponseData } from './response.service';

describe('ResponseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
  
    expect(new ResponseData).toBeTruthy();
  });
});
