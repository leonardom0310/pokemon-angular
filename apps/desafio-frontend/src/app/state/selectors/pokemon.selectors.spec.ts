import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { selectPageable, selectPokemons } from './pokemon.selectors';

describe('TableSelector', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot([])],
      providers: []
    }).compileComponents();
  });
  it('should return the pokemons', () => {
    const result = selectPokemons.projector({ pokemons: [{name:''},{name:''}] });
    expect(result.length).toBe(2);
  });

  it('should return the pageable', () => {
    const result = selectPageable.projector({ pageable: 5 });
    expect(result).toBe(5);
  });
});
