import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPokemon } from '../../../modules/pokemon/models/pokemon.interface';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import {
  loadPokemons,
  next,
  previous,
} from '../../../state/actions/pokemon.actions';
import { AppState } from '../../../state/reducers/pokemon.reducers';
import {
  selectPageable,
  selectPokemons,
} from '../../../state/selectors/pokemon.selectors';

@Component({
  selector: 'leonardomartins-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss'],
})
export class PokelistComponent implements OnInit {
  title = 'desafio-frontend';
  pokemons: IPokemon[] = [];
  pageable = 0;
  constructor(
    private store: Store<AppState>,
    private localStorageService: LocalStorageService
  ) {}
  ngOnInit() {
    this.setInitialRules();
  }

  setInitialRules() {
    this.store.dispatch(loadPokemons({ pageable: this.pageable }));
    this.getPokemons();
    this.getPageable();
  }

  getPageable() {
    this.store.select(selectPageable).subscribe((pageable) => {
      this.pageable = pageable;
      this.store.dispatch(loadPokemons({ pageable: this.pageable }));
    });
  }

  getPokemons() {
    this.store.select(selectPokemons).subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }
  next() {
    this.store.dispatch(next());
  }
  previous() {
    this.store.dispatch(previous());
  }

  updateFav(pokemon: IPokemon) {
    if (
      pokemon.favorite == false ||
      this.localStorageService.get(pokemon.name) == null
    ) {
      this.localStorageService.set(pokemon.name, pokemon);
    } else {
      this.localStorageService.remove(pokemon.name);
    }
    this.store.dispatch(loadPokemons({ pageable: this.pageable }));
  }

  formatString(str: string): string {
    return str[0].toUpperCase() + str.substr(1);
  }
}
