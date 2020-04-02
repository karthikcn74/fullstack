import { Component, OnInit, Input } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'ui-hm-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  @Input() images;
  slideOptions = {
    initialSlide: 1,
    speed: 400,
  };

  constructor() { }

  ngOnInit() { 
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}
