import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'ui-hm-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
})
export class ThumbnailComponent implements OnInit {
  @Input() products;
  @Output() callback = new EventEmitter();
  selectedItem

  constructor() { }

  ngOnInit() { 
    console.log('this.products => ', this.products);
  }

  segmentChanged(event) {
    this.callback.emit(event.detail.value);
  }

}
