import * as fromReducer from './pokemon.reducers';
import { loadPokemonsSucess, next, previous } from '../actions/pokemon.actions';
import { IPokemon } from '../../modules/pokemon/models/pokemon.interface';

describe('PokemonsReducer', () => {
  it('should increase the pageable on the next action', () => {
    const { initialState } = fromReducer;
    const action = next();
    const state = fromReducer.pokemonReducer(initialState, action);
    expect(state.pageable).toEqual(1);
    expect(state).not.toBe(initialState);
  });

  it('should decrease the pageable on the next action', () => {
    const { initialState } = fromReducer;
    const action = previous();
    const state = fromReducer.pokemonReducer(initialState, action);
    expect(state.pageable).toEqual(-1);
    expect(state).not.toBe(initialState);
  });

  it('should set the pokemons upon loading success', () => {
    const { initialState } = fromReducer;
    const newState = {payload : [{name:'test'}] as IPokemon[]};
    const action = loadPokemonsSucess(newState);
    const state = fromReducer.pokemonReducer(initialState, action);
    expect(state.pokemons.length).toEqual(1);
    expect(state).not.toBe(initialState);
  });
});
