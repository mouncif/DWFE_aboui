import { TestBed } from '@angular/core/testing';

import { GVentesService } from './g-ventes.service';

describe('GVentesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GVentesService = TestBed.get(GVentesService);
    expect(service).toBeTruthy();
  });
});
