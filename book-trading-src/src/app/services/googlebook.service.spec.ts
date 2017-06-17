import { TestBed, inject } from '@angular/core/testing';

import { GooglebookService } from './googlebook.service';

describe('GooglebookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GooglebookService]
    });
  });

  it('should ...', inject([GooglebookService], (service: GooglebookService) => {
    expect(service).toBeTruthy();
  }));
});
