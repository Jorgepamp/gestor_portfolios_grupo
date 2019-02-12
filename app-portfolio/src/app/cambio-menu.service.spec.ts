/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CambioMenuService } from './cambio-menu.service';

describe('CambioMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CambioMenuService]
    });
  });

  it('should ...', inject([CambioMenuService], (service: CambioMenuService) => {
    expect(service).toBeTruthy();
  }));
});
