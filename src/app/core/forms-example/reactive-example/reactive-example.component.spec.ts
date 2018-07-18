import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveExampleComponent } from './reactive-example.component';

describe('ReactiveExampleComponent', () => {
  let component: ReactiveExampleComponent;
  let fixture: ComponentFixture<ReactiveExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
