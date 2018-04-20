import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponen', () => {
  let component: ContactComponen;
  let fixture: ComponentFixture<ContactComponen>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponen ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
