import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  IPokemon,
} from '../../../modules/pokemon/models/pokemon.interface';
import { loadPokemons, next, previous } from '../../../state/actions/pokemon.actions';
import { AppState } from '../../../state/reducers/pokemon.reducers';
import {
  selectPageable,
  selectPokemons,
} from '../../../state/selectors/pokemon.selectors';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss'],
})
export class PokelistComponent {
  title = 'desafio-frontend';
  pokemons: IPokemon[] = [];
  pageable = 0;
  constructor(private store: Store<AppState>, private localStorageService: LocalStorageService) {}
  ngOnInit() {
    this.store.dispatch(loadPokemons({pageable:this.pageable}));
    this.store.select(selectPokemons).subscribe((pokemons) => {
      this.pokemons = pokemons;
      console.log(pokemons)
    });
    this.store.select(selectPageable).subscribe((pageable) => {
      this.pageable = pageable;
      console.log(pageable);
      this.store.dispatch(loadPokemons({pageable:this.pageable}));
    });
  }
  next(){
    this.store.dispatch(next())
  }
  previous(){
    this.store.dispatch(previous())
  }

  updateFav(pokemon: IPokemon) {
    if (pokemon.favorite == false || this.localStorageService.get(pokemon.name) == null) {
      this.localStorageService.set(pokemon.name, pokemon)
    }
    else {
      this.localStorageService.remove(pokemon.name)
    }
    this.store.dispatch(loadPokemons({pageable:this.pageable}));
  }
}
