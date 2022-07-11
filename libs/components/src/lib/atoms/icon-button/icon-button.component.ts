import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'leonardomartins-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent{
  @Input() icon!:string;
  @Input() size!:string;
  @Input() color!:string;
  @Input() padding!:string;
  @Output() clickEmitter: EventEmitter<boolean>=new EventEmitter();
  
  emitEvent(){
    this.clickEmitter.emit(true)
  }

}
