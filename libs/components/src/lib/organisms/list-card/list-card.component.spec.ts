import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardComponent } from './list-card.component';

describe('ListCardComponent', () => {
  let component: ListCardComponent;
  let fixture: ComponentFixture<ListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should emit the next event on click', () => {
    component.pagination = true;
    fixture.detectChanges();
    const spyEmitter = jest.spyOn(component, 'next');
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('#nextBtn');
    button.click();
    fixture.detectChanges();
    expect(spyEmitter).toHaveBeenCalled();
  });

  it('should emit the previous event on click', () => {
    component.pagination = true;
    fixture.detectChanges();
    const spyEmitter = jest.spyOn(component, 'previous');
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('#previousBtn');
    button.click();
    fixture.detectChanges();
    expect(spyEmitter).toHaveBeenCalled();
  });

  it('should create the pagination if pagination = true', () => {
    component.pagination = true;
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const pagination = nativeElement.querySelector('#pagination');
    fixture.detectChanges();
    expect(pagination).toBeDefined();
  });

  it('should not create the pagination if pagination = false', () => {
    component.pagination = false;
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const pagination = nativeElement.querySelector('#pagination');
    fixture.detectChanges();
    expect(pagination).toBe(null);
  });

  it('should set the title',()=>{
    component.title = "test";
    fixture.detectChanges(); 
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector('h1')?.textContent).toContain(
      'test'
    );
  })
});
