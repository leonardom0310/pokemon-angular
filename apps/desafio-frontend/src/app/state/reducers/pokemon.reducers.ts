import { Action, createReducer, on } from '@ngrx/store';
import { IPokemon, IPokemonList, IPokemonResults } from '../../modules/pokemon/models/pokemon.interface';
import * as PokemonActions from '../actions/pokemon.actions';

export interface AppState {
  pokemons: IPokemon[];
  pageable: number;
}
export const initialState: AppState = {
  pokemons: [],
  pageable: 0
};

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.loadPokemonsSucess, (state, { payload }) => ({...state, pokemons:payload})),
  on(PokemonActions.next, (state) => ({...state, pageable:state.pageable + 1})),
  on(PokemonActions.previous, (state) => ({...state, pageable:state.pageable -1}))
);
