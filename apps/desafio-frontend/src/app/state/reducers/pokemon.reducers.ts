import { Action, createReducer, on } from '@ngrx/store';
import { IPokemonList, IPokemonResults } from '../../modules/pokemon/models/pokemon.interface';
import * as PokemonActions from '../actions/pokemon.actions';

export interface AppState {
  pokelist: IPokemonResults[];
  pageable: number;
}
export const initialState: AppState = {
  pokelist: [],
  pageable: 0
};

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.loadPokelistSucess, (state, { payload }) => ({...state, pokelist:payload}))
);
