import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarComponent } from './side-bar.component';

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a item list with the respective icon and route link', () => {
    component.menuItens = [{rout:'rout',icon:'test'}];
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const a = nativeElement.querySelector('a');
    const svgIcon = nativeElement.querySelector('#list-icon');
    expect(a.href).toContain('rout');
    expect(svgIcon.src).toBe('test')
 });

 it('should create the app-icon',()=>{
  component.menuIcon = 'test';
  fixture.detectChanges();
  const nativeElement = fixture.nativeElement;
  const svgIcon = nativeElement.querySelector('#menu-icon');
  expect(svgIcon.src).toBe('test')
 })
});
