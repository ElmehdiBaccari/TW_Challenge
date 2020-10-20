import { TestBed } from '@angular/core/testing';

import { ChartViewService } from './chart-view.service';

describe('ChartViewService', () => {
  let service: ChartViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
