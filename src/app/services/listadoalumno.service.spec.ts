import { TestBed } from '@angular/core/testing';

import { ListadoalumnoService } from './listadoalumno.service';

describe('ListadoalumnoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListadoalumnoService = TestBed.get(ListadoalumnoService);
    expect(service).toBeTruthy();
  });
});
