import { Component, OnInit } from '@angular/core';
import { HttpExampleService } from '../http-example.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {


  characters: Array<any>
  constructor(private httpExampleService: HttpExampleService) { }

  ngOnInit() {
    this.httpExampleService.getAllPeople().subscribe(data => {
      console.log(data)
      this.characters = data.results;
    })
  }

}
