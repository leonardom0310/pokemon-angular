import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemonList } from '../models/pokemon.interface';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}
  url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=9999999999999';

  getAll() : Observable<IPokemonList> {
    return this.http.get(this.url) as Observable<IPokemonList>;
  }
}
