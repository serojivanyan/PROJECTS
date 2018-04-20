import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { upComingComponent } from './upComing.component';

describe('upComingComponent', () => {
  let component: upComingComponent;
  let fixture: ComponentFixture<upComingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ upComingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(upComingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
