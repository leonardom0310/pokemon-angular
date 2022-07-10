import { createAction, props } from '@ngrx/store';
import { IPokemon } from '../../modules/pokemon/models/pokemon.interface';

export const loadPokemons = createAction(
    'LOAD_POKEMONS',
    props<{ pageable: number }>()
);
export const loadPokemonsSucess = createAction(
    'LOAD_POKEMONS_SUCCESS',
    props<{ payload: IPokemon[] }>()
);

export const next = createAction(
    'PAGEABLE_NEXT',
);
export const previous = createAction(
    'PAGEABLE_PREVIOUS',
);
