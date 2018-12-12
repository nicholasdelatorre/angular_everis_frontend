import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Filme } from '../_models/filme.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  filmes: Filme[];

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Filme[]>(`${environment.api}/Filmes`);
  }

}
