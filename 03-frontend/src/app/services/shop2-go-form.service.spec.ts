import { TestBed } from '@angular/core/testing';

import { Shop2GoFormService } from './shop2-go-form.service';

describe('Shop2GoFormService', () => {
  let service: Shop2GoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Shop2GoFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
