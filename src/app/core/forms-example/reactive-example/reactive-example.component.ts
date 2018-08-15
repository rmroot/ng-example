import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-reactive-example',
  templateUrl: './reactive-example.component.html',
  styleUrls: ['./reactive-example.component.css']
})
export class ReactiveExampleComponent implements OnInit {
  userForm: FormGroup;
  roles: Array<string> = [
    'Guest',
    'Admin',
    'Owner',
    'Operator'
  ];
  user: User = {
    firstName: 'New',
    lastName: 'User',
    role: 'Guest',
    notes: undefined
  };
  constructor(private formBuilder: FormBuilder) { 
    this.userForm = this.formBuilder.group({
      'firstName': [this.user.firstName, [Validators.required]],
      'lastName': [this.user.lastName, [Validators.required]],
      'role': [this.user.role, [Validators.required]],
      'notes': [this.user.notes, [Validators.maxLength(45)]]
    });
  }
  ngOnInit() {
  }

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
