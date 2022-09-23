import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmipaymentComponent } from './emipayment.component';

describe('EmipaymentComponent', () => {
  let component: EmipaymentComponent;
  let fixture: ComponentFixture<EmipaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmipaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmipaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
