import { TestBed, inject } from '@angular/core/testing';

import { SearchTextService } from './search-filed.service';

describe('SearchFiledService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchTextService]
    });
  });

  it('should ...', inject([SearchTextService], (service: SearchTextService) => {
    expect(service).toBeTruthy();
  }));
});
