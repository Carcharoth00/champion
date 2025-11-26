import { TestBed } from '@angular/core/testing';

import { APILoL } from './api-lo-l';

describe('APILoL', () => {
  let service: APILoL;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APILoL);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
