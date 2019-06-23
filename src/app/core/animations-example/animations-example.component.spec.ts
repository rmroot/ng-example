import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationsExampleComponent } from './animations-example.component';

describe('AnimationsExampleComponent', () => {
  let component: AnimationsExampleComponent;
  let fixture: ComponentFixture<AnimationsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
