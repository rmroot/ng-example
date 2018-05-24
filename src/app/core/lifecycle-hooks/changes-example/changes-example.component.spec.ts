import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesExampleComponent } from './changes-example.component';

describe('ChangesExampleComponent', () => {
  let component: ChangesExampleComponent;
  let fixture: ComponentFixture<ChangesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangesExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
