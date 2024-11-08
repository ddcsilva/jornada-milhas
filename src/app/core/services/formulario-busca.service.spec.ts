import { TestBed } from '@angular/core/testing';
import { FormularioBuscaService } from './formulario-busca.service';

describe('FormularioBuscaService', () => {
  let service: FormularioBuscaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioBuscaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
