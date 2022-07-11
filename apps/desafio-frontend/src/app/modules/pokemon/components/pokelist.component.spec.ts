import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import {
  selectPageable,
  selectPokemons,
} from '../../../state/selectors/pokemon.selectors';
import { IPokemon } from '../models/pokemon.interface';

import { PokelistComponent } from './pokelist.component';

describe('PokelistComponent', () => {
  let component: PokelistComponent;
  let fixture: ComponentFixture<PokelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [PokelistComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch the next page action', () => {
    const spyDispatch = jest.spyOn(component['store'], 'dispatch');
    component.next();
    expect(spyDispatch).toHaveBeenCalledWith({ type: 'PAGEABLE_NEXT' });
  });

  it('should dispatch the previous page action', () => {
    const spyDispatch = jest.spyOn(component['store'], 'dispatch');
    component.previous();
    expect(spyDispatch).toHaveBeenCalledWith({ type: 'PAGEABLE_PREVIOUS' });
  });

  it('should set the pokemon as favorite on the localstorage', () => {
    const spyDispatch = jest.spyOn(component['store'], 'dispatch');
    const pokemon = { favorite: false, name: 'pokemonName' } as IPokemon;
    const spySetStorage = jest
      .spyOn(component['localStorageService'], 'set')
      .mockReturnThis();
    component.updateFav(pokemon);
    expect(spyDispatch).toHaveBeenCalledWith({
      pageable: 0,
      type: 'LOAD_POKEMONS',
    });
    expect(spySetStorage).toBeCalledWith(pokemon.name, pokemon);
  });

  it('should remove the pokemon as favorite on the localstorage', () => {
    const spyDispatch = jest.spyOn(component['store'], 'dispatch');
    const pokemon = { favorite: true, name: 'pokemonName' } as IPokemon;
    jest.spyOn(component['localStorageService'], 'get').mockReturnValue(true);
    const spySetStorage = jest
      .spyOn(component['localStorageService'], 'remove')
      .mockReturnThis();
    component.updateFav(pokemon);
    expect(spyDispatch).toHaveBeenCalledWith({
      pageable: 0,
      type: 'LOAD_POKEMONS',
    });
    expect(spySetStorage).toBeCalledWith(pokemon.name);
  });

  it('should select the pokemons from the store', () => {
    const spySelect = jest.spyOn(component['store'], 'select');
    component.getPokemons();
    expect(spySelect).toBeCalledWith(selectPokemons);
  });

  it('should select the pageable from the store', () => {
    const spySelect = jest.spyOn(component['store'], 'select');
    component.getPageable();
    expect(spySelect).toBeCalledWith(selectPageable);
  });

  it('should set the initial rules', () => {
    const spyGetPageable = jest
      .spyOn(component, 'getPageable')
      .mockReturnThis();
    const spyGetPokemons = jest
      .spyOn(component, 'getPokemons')
      .mockReturnThis();
    const spyDispatch = jest.spyOn(component['store'], 'dispatch');
    component.setInitialRules();
    expect(spyGetPageable).toHaveBeenCalled();
    expect(spyGetPokemons).toHaveBeenCalled();
    expect(spyDispatch).toHaveBeenCalledWith({
      pageable: 0,
      type: 'LOAD_POKEMONS',
    });
  });

  it('should format the title', () => {
    expect(component.formatString('test')).toBe('Test');
  });
});
