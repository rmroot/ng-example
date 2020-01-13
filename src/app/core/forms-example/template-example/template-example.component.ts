import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../user';
import { FormGroup } from '../../../../../node_modules/@angular/forms';

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

  @ViewChild('userForm') userForm: FormGroup;
  logForm(){
    console.log(this.userForm);
  }

  logFormValue(){
    console.log(this.userForm.value);
  }
  
  disableForm(){
    this.userForm.disable();
  }

  enableForm(){
    this.userForm.enable();
  }
}