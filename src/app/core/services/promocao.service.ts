import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocao } from '../models/promocao.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {
  private apiUrl: string = environment.apiUrl;
  private controller: string = 'promocoes';

  constructor(private http: HttpClient) {}

  listar(): Observable<Promocao[]> {
    return this.http.get<Promocao[]>(`${this.apiUrl}/${this.controller}`);
  }
}
