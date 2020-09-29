import { TestBed } from '@angular/core/testing';

import { AppDataGuard } from './app-data.guard';

describe('AppDataGuard', () => {
  let guard: AppDataGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AppDataGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
