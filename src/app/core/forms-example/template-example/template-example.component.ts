import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-template-example',
  templateUrl: './template-example.component.html',
  styleUrls: ['./template-example.component.css']
})
export class TemplateExampleComponent implements OnInit {
  user: User = {
    firstName: 'New',
    lastName: 'User',
    role: 'Guest',
    notes: undefined
  };

  roles: Array<string> = [
    'Guest',
    'Admin',
    'Owner',
    'Operator'
  ];

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('userForm') userForm: ElementRef;
  logForm(){
    console.log(this.userForm);
  }
}