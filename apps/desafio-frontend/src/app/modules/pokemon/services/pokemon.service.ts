import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, merge, Observable, pipe, retry } from 'rxjs';
import {
  IPokemon,
  IPokemonList,
  IPokemonResults,
} from '../models/pokemon.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/reducers/pokemon.reducers';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}
  urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=9';

  getPokemonInfo(search: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(search).pipe(retry(2));
  }

  getPokelist(pageable: number): Observable<IPokemonList> {
    return this.http.get(
      this.urlBase + '&offset=' + pageable * 9
    ) as Observable<IPokemonList>;
  }
  getPokemons(pageable: number): Observable<IPokemon[]> {
    return new Observable<IPokemon[]>((obs) => {
      this.getPokelist(pageable)
        .pipe(
          map((pokemons) => {
            return pokemons.results.map((pokemon) =>
              this.getPokemonInfo(pokemon.url)
            );
          })
        )
        .subscribe((observablesPokemon) => {
          const pokemons: IPokemon[] = [];
          merge(...observablesPokemon).subscribe(
            (pokemon) => {
              pokemons.push(pokemon);
            },
            () => {},
            () => {
              obs.next(pokemons);
              obs.complete();
            }
          );
        });
    });
  }
}
