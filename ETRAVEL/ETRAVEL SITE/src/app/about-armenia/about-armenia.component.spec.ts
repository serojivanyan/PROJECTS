import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutArmeniaComponent } from './about-armenia.component';

describe('AboutArmeniaComponent', () => {
  let component: AboutArmeniaComponent;
  let fixture: ComponentFixture<AboutArmeniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutArmeniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutArmeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
