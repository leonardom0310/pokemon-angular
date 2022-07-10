import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  IPokemonList,
  IPokemonResults,
} from './modules/pokemon/models/pokemon.interface';
import { loadPokemons } from './state/actions/pokemon.actions';
import { AppState } from './state/reducers/pokemon.reducers';
import {
  selectPokelist,
  selectState,
} from './state/selectors/pokemon.selectors';
@Component({
  selector: 'leonardomartins-root',
  template: `
    <li *ngFor="let poke of pokelist">
      {{ poke.url }}
    </li>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'desafio-frontend';
  pokelist: IPokemonResults[] = [];
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.store.dispatch(loadPokemons());
    this.store.select(selectPokelist).subscribe((pokelist) => {
      this.pokelist = pokelist;
    });
  }
}
