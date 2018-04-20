import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cargoComponent } from './cargo.component';

describe('cargoComponent', () => {
  let component: cargoComponent;
  let fixture: ComponentFixture<cargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
