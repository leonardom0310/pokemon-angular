import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  IPokemon,
} from './modules/pokemon/models/pokemon.interface';
import { loadPokemons, next, previous } from './state/actions/pokemon.actions';
import { AppState } from './state/reducers/pokemon.reducers';
import {
  selectPageable,
  selectPokemons,
} from './state/selectors/pokemon.selectors';
@Component({
  selector: 'leonardomartins-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'desafio-frontend';
}
