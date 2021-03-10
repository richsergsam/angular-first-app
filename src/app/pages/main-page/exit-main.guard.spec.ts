import { TestBed } from '@angular/core/testing';

import { ExitMainGuard } from './exit-main.guard';

describe('ExitMainGuard', () => {
  let guard: ExitMainGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExitMainGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
