import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMangerComponent } from './contact-manger.component';

describe('ContactMangerComponent', () => {
  let component: ContactMangerComponent;
  let fixture: ComponentFixture<ContactMangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
