import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPokemonResults } from '../../modules/pokemon/models/pokemon.interface';
import { AppState } from '../reducers/pokemon.reducers';

export const selectState = createFeatureSelector<AppState>('pokemons');

export const selectPageable = createSelector(selectState, (state) => {
  return state.pageable;
});

export const selectPokemons = createSelector(selectState, (state) => {
  return state.pokemons;
});
