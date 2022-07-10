import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PokemonService } from '../../modules/pokemon/services/pokemon.service';
 
@Injectable()
export class PokemonEffects {
 
  loadPokemons$ = createEffect(() => this.actions$.pipe(
    ofType('LOAD_POKELIST'),
    mergeMap(() => this.moviesService.getAll()
      .pipe(
        map(pokelist => ({ type: 'LOAD_POKELIST_SUCCESS', payload: pokelist.results })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private moviesService: PokemonService
  ) {}
}