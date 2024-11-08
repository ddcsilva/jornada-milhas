import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UnidadeFederativa } from '../models/unidade-federativa.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaService {
  private apiUrl: string = environment.apiUrl;
  private controller: string = 'estados';
  private cache$?: Observable<UnidadeFederativa[]>;

  constructor(private http: HttpClient) {}

  listar(): Observable<UnidadeFederativa[]> {
    if (!this.cache$) {
      this.cache$ = this.obterEstados().pipe(shareReplay(1));
    }

    return this.cache$;
  }

  private obterEstados(): Observable<UnidadeFederativa[]> {
    return this.http.get<UnidadeFederativa[]>(`${this.apiUrl}/${this.controller}`);
  }
}
