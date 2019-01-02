import { TestBed } from '@angular/core/testing';

import { JsonApiFormatService } from './json-api-format.service';

describe('JsonApiFormatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonApiFormatService = TestBed.get(JsonApiFormatService);
    expect(service).toBeTruthy();
  });
});
