import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseExampleComponent } from './firebase-example.component';

describe('FirebaseExampleComponent', () => {
  let component: FirebaseExampleComponent;
  let fixture: ComponentFixture<FirebaseExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
