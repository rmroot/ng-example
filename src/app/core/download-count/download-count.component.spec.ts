import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCountComponent } from './download-count.component';

describe('DownloadCountComponent', () => {
  let component: DownloadCountComponent;
  let fixture: ComponentFixture<DownloadCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
