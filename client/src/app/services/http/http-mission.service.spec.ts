import { TestBed } from '@angular/core/testing';

import { HttpMissionService } from './http-mission.service';

describe('HttpMissionService', () => {
  let service: HttpMissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpMissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
