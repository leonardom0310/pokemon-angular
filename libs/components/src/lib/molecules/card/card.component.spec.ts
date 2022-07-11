import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the title',()=>{
    const spyOnFormat = jest.spyOn(component,'formatTitle');
    component.title = "test";
    fixture.detectChanges(); 
    expect (spyOnFormat).toHaveBeenCalledWith('test')
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector('h1')?.textContent).toContain(
      'Test'
    );
  })

  it('should render the favorite icon and emit upon clicking',()=>{
    component.isFavorite = true;
    component.habilitateFavoritePrimaryBtn = true;
    fixture.detectChanges(); 
    const nativeElement = fixture.nativeElement;
    const iconFavorite = nativeElement.querySelector('.isFavorite');
    const iconNotFavorite = nativeElement.querySelector('.notFavorite');
    expect(iconFavorite).toBeDefined();
    expect(iconNotFavorite).toBe(null);
  })

  it('should render the not favorite icon and emit upon clicking',()=>{
    component.isFavorite = false;
    component.habilitateFavoritePrimaryBtn = true;
    fixture.detectChanges(); 
    const nativeElement = fixture.nativeElement;
    const iconFavorite = nativeElement.querySelector('.isFavorite');
    const iconNotFavorite = nativeElement.querySelector('.notFavorite');
    expect(iconFavorite).toBe(null);
    expect(iconNotFavorite).toBeDefined();
  });

  it('should render the regular icon button',()=>{
    component.isFavorite = true;
    component.habilitateFavoritePrimaryBtn = false;
    fixture.detectChanges(); 
    const nativeElement = fixture.nativeElement;
    const regularButton = nativeElement.querySelector('.regularButton');
    expect(regularButton).toBeDefined();
  });

  it('should not render any button if isFavorite&&habilitateFavoritePrimaryBtn = false',()=>{
    component.isFavorite = false;
    component.habilitateFavoritePrimaryBtn = false;
    fixture.detectChanges(); 
    const nativeElement = fixture.nativeElement;
    const regularButton = nativeElement.querySelector('.regularButton');
    const iconFavorite = nativeElement.querySelector('.isFavorite');
    const iconNotFavorite = nativeElement.querySelector('.notFavorite');
    expect(regularButton).toBe(null);
    expect(iconFavorite).toBe(null);
    expect(iconNotFavorite).toBe(null);
  });

  it('should format the title',()=>{
    expect(component.formatTitle('test')).toBe('Test');
  })
});
