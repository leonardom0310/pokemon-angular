import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { PokemonService } from '../../modules/pokemon/services/pokemon.service';

@Injectable()
export class PokemonEffects {
  loadPokemons$ = createEffect(() =>
    this.actions$.pipe(
      ofType('LOAD_POKEMONS'),
      exhaustMap((action : any) => {
        return this.pokemonsService.getPokemons(action.pageable).pipe(
              map((pokemons) => ({
                  type: 'LOAD_POKEMONS_SUCCESS',
                  payload: pokemons,
              })),
              catchError(() => EMPTY)
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonsService: PokemonService
  ) {}
}
