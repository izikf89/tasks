import { TestBed } from '@angular/core/testing';

import { DataManagmentService } from './data-managment.service';

describe('DataManagmentService', () => {
  let service: DataManagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataManagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
