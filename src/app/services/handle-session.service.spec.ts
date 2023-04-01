import { TestBed } from '@angular/core/testing';

import { HandleSessionService } from './handle-session.service';

describe('HandleSessionService', () => {
  let service: HandleSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
