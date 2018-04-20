import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { inComingComponent } from './inComing.component';

describe('inComingComponent', () => {
  let component: inComingComponent;
  let fixture: ComponentFixture<inComingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ inComingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(inComingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
