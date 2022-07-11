import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

@Component({
  selector: 'leonardomartins-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  @Input() templateGrid! : TemplateRef<any>;  
  @Input() itens : Array<any>=[]; 

  @Output() favorite: EventEmitter<any>=new EventEmitter();

}
