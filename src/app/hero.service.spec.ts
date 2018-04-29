import { TestBed, inject } from '@angular/core/testing';
import { CatService } from './hero.service';

describe('CatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatService]
    });
  });

  it('should be created', inject([CatService], (service: CatService) => {
    expect(service).toBeTruthy();
  }));
});
