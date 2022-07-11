import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
} from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() item!: any;
  @Input() title!: string;
  @Input() iconCard!: string;
  @Input() iconbutton!: string;
  @Input() habilitateFavoritePrimaryBtn!: boolean;
  @Input() template!: TemplateRef<any>;

  @Output() btnEmitter: EventEmitter<any> = new EventEmitter();

  isFavorite = false;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    if (this.item && this.localStorageService.get(this.item.name)) {
      this.isFavorite = true;
    }
  }

  formatTitle(str: string):string {
    if (str) {
      return str[0].toUpperCase() + str.substr(1);
    }
    return ''
  }

  primaryButtonEmitter(boo: boolean) {
    if (boo == true) {
      this.btnEmitter.emit(this.item);
    }
  }
}
