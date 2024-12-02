import { TestBed } from '@angular/core/testing';

import { ArithematicService } from './arithematic.service';

describe('ArithematicService', () => {
  let service: ArithematicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArithematicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
