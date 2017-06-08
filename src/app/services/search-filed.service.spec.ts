import { TestBed, inject } from '@angular/core/testing';

import { SearchFiledService } from './search-filed.service';

describe('SearchFiledService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchFiledService]
    });
  });

  it('should ...', inject([SearchFiledService], (service: SearchFiledService) => {
    expect(service).toBeTruthy();
  }));
});
