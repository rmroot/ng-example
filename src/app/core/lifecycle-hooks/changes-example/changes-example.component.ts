import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-changes-example',
  templateUrl: './changes-example.component.html',
  styleUrls: ['./changes-example.component.css']
})
export class ChangesExampleComponent implements OnInit {
  @Input()
  num: number;
  constructor() { }

  ngOnInit() {
    console.log('child ngOnInit');
  }

  ngOnChanges(change: SimpleChanges){
    if(change.num.currentValue >> change.num.previousValue){
      console.log('num went up from: ' + change.num.previousValue + ' to ' + change.num.currentValue);
    }
    console.log('child ngOnChanges');
  }

  ngDoCheck(){
    console.log('child ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('child ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('child ngAfterContentChecked')
  }

  ngAfterViewInit(){
    console.log('child ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('child ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('child ngOnDestory');
  }
}
