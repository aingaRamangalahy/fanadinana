import { TestBed } from '@angular/core/testing';

import { MpiadinaService } from './mpiadina.service';

describe('MpiadinaService', () => {
  let service: MpiadinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MpiadinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
