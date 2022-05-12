import { TestBed } from '@angular/core/testing';

import { LogInRegisterService } from './log-in-register.service';

describe('LogInRegisterService', () => {
  let service: LogInRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogInRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
