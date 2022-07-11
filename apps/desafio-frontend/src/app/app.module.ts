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
import { AppRoutingModule } from './app-routing.module';
import { PokelistComponent } from './modules/pokemon/components/pokelist.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent,PokelistComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ pokemons: pokemonReducer }),
    EffectsModule.forRoot([PokemonEffects]),
    HttpClientModule,
    ComponentsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
