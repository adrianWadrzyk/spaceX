import { TestBed } from '@angular/core/testing';

import { PhotoResponseService } from './photo-response.service';

describe('PhotoResponseService', () => {
  let service: PhotoResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
