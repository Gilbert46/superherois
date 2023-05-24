import { TestBed } from '@angular/core/testing';

import { MisatgeService } from './misatge.service';

describe('MisatgeService', () => {
  let service: MisatgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisatgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
