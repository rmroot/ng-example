import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {

  flexData: Array<number> = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ]
  justifyCenter: boolean = false;
  column: boolean = false;
  alignCenter: boolean;
  constructor() { }

  ngOnInit() {
  }

  toggleColumn(){
    this.column = !this.column;
  }

  toggleJustifyCenter(){
    this.justifyCenter = !this.justifyCenter;
  }
  toggleAlignCenter(){
    this.alignCenter = !this.alignCenter;
  }

}
