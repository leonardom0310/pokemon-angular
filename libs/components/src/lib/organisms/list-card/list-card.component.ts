import { Component, OnInit, Output, EventEmitter, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent {
  @Input() itensListCard!: any[];
  @Input() title!: string;
  @Input() search!: boolean;
  @Input() pagination!: boolean;
  @Input() totalPages!: number;
  @Input() currentPage!: number;
  @Input() templateListCard! : TemplateRef<any>;  

  @Output() favorite: EventEmitter<any> = new EventEmitter();
  @Output() previousEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() nextEvent: EventEmitter<boolean> = new EventEmitter();

  searchField = '';
  isFavorite = false;

  change(event: any) {
    this.searchField = event.target.value;
  }
  previous() {
    this.previousEvent.emit();
  }
  next() {
    this.nextEvent.emit();
  }
  updateFav(obj: any) {
    if (obj) {
      this.favorite.emit(obj);
    }
  }
}
