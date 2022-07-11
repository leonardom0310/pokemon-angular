import { ComponentFixture, TestBed } from '@angular/core/testing';

import { iconbuttonComponent } from './icon-button.component';

describe('icon-buttonComponent', () => {
  let component: iconbuttonComponent;
  let fixture: ComponentFixture<iconbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ iconbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(iconbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
