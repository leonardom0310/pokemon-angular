import { createAction, props } from '@ngrx/store';
import { IPokemonList, IPokemonResults } from '../../modules/pokemon/models/pokemon.interface';

export const loadPokemons = createAction('LOAD_POKELIST');
export const loadPokelistSucess = createAction(
    'LOAD_POKELIST_SUCCESS',
  props<{ payload: IPokemonResults[] }>()
);
