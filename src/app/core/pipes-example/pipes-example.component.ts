import { Component, OnInit } from '@angular/core';
import { Person, People } from './pipes-example-data';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {

  orderBy: string = 'height';
  orderDirection: string = 'asc';
  people: Array<Person>;
  todaysDate: Date;
  constructor() {
    this.todaysDate = new Date();
    this.people = People;
   }

  ngOnInit() {

  }

  setOrderBy(str: string){
    if(str == this.orderBy){
      this.toggleOrderDirection();
    }else {
      this.orderBy = str;
    }
  }

  toggleOrderDirection(){
    if(this.orderDirection == 'asc'){
      this.orderDirection = 'desc';
    }else{
      this.orderDirection = 'asc';
    }
  }
}
