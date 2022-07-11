import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {
  @Input() icon!:string;
  @Input() size!:string;
  @Input() color!:string;
  @Input() padding!:string;
  @Output() click: EventEmitter<boolean>=new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }
  emitEvent(){
    this.click.emit(true)
  }

}
