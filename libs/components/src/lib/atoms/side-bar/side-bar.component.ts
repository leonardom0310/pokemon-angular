import { Component, Input } from '@angular/core';

@Component({
  selector: 'leonardomartins-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
 @Input() menuItens!:any[]
 @Input() menuIcon!:string;
}
