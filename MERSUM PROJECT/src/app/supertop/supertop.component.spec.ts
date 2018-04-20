import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupertopComponent } from './supertop.component';

describe('SupertopComponent', () => {
  let component: SupertopComponent;
  let fixture: ComponentFixture<SupertopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupertopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupertopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
