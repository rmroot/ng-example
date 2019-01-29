import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
export interface Item { 
  test: string;
  test2: string;
}
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-firebase-example',
  templateUrl: './firebase-example.component.html',
  styleUrls: ['./firebase-example.component.css']
})
export class FirebaseExampleComponent implements OnInit {

  private itemCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  dataForm: FormGroup;
  constructor(afs: AngularFirestore, private formBuilder: FormBuilder) {
    this.itemCollection = afs.collection<Item>('items');
    this.items = this.itemCollection.valueChanges();
    console.log(this.items);
    this.dataForm = this.getForm();
   }

  ngOnInit() {

  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      'test': [],
      'test2': []
    })
  }

  addData(){
    let newItem = {
      'test': this.dataForm.controls.test.value,
      'test2': this.dataForm.controls.test2.value
    }
    this.itemCollection.add(newItem);
  }


  deleteItem(item){
    console.log(item);
  }
}


