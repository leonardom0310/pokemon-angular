import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './atoms/side-bar/side-bar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CardComponent } from './molecules/card/card.component';
import { GridComponent } from './molecules/grid/grid.component';
import { ListCardComponent } from './organisms/list-card/list-card.component';
import { IconButtonComponent } from './atoms/icon-button/icon-button.component';

@NgModule({
  imports: [CommonModule, AngularSvgIconModule.forRoot()],
  declarations: [SideBarComponent, CardComponent, GridComponent, ListCardComponent,IconButtonComponent],
  exports: [SideBarComponent, CardComponent, GridComponent, ListCardComponent,IconButtonComponent],
  bootstrap:[ComponentsModule]
})
export class ComponentsModule {}
