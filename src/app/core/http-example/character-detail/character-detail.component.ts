import { Component, OnInit } from '@angular/core';
import { HttpExampleService } from '../http-example.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: any;
  constructor(private httpExampleService: HttpExampleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      console.log(id)
      if(id){
        //this.getCharacter(id);
      }
    })
  }

  getCharacter(id: number){
    this.httpExampleService.getPerson(id).subscribe(data => {
      this.character = data;
    })
  }
}
