import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { PokemonEffects } from './state/effects/pokemon.effects';
import { pokemonReducer } from './state/reducers/pokemon.reducers';

import {ComponentsModule} from '@leonardomartins/components'

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ pokemons: pokemonReducer }),
    EffectsModule.forRoot([PokemonEffects]),
    HttpClientModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
