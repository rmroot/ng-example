import { TestBed } from '@angular/core/testing';

import { HttpExampleService } from './http-example.service';

describe('HttpExampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpExampleService = TestBed.get(HttpExampleService);
    expect(service).toBeTruthy();
  });
});
