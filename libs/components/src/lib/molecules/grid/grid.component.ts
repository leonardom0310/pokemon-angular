import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  @Input() templateGrid! : TemplateRef<any>;  
  @Input() itens : Array<any>=[]; 

  @Output() favorite: EventEmitter<any>=new EventEmitter();

  constructor(){
    console.log(this.itens);
  }
  
  updateFav(obj: any) {
    if (obj) {
      this.favorite.emit(obj)
    }
  }
}
