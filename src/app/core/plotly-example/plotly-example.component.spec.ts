import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotlyExampleComponent } from './plotly-example.component';

describe('PlotlyExampleComponent', () => {
  let component: PlotlyExampleComponent;
  let fixture: ComponentFixture<PlotlyExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotlyExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotlyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
