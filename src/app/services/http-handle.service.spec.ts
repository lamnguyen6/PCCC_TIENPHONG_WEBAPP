import { TestBed } from '@angular/core/testing';

import { HttpHandleService } from './http-handle.service';

describe('HttpHandleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpHandleService = TestBed.get(HttpHandleService);
    expect(service).toBeTruthy();
  });
});
