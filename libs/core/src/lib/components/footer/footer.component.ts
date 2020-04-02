import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-hm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Output() callback = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  OnHome(event) {
    this.callback.emit({action: 'home'});
  }

  OnFeatured() {
    this.callback.emit({action: 'car-listing'});
  }
}
