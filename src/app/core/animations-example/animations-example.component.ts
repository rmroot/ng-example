import { Component, OnInit } from '@angular/core';
import { toastAnimation } from './toast-animation';

@Component({
  selector: 'app-animations-example',
  templateUrl: './animations-example.component.html',
  styleUrls: ['./animations-example.component.css'],
  animations: [toastAnimation]
})
export class AnimationsExampleComponent implements OnInit {

  toastState: string = 'hide';
  constructor() { }

  ngOnInit() {
  }


  toggleToast() {
    if (this.toastState == 'hide') {
      this.toastState = 'show';
    } else {
      this.toastState = 'hide';
    }
  }
}
