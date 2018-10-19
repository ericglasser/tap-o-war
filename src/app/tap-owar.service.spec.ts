import { TestBed } from '@angular/core/testing';

import { TapOWarService } from './tap-owar.service';

describe('TapOWarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TapOWarService = TestBed.get(TapOWarService);
    expect(service).toBeTruthy();
  });
});
