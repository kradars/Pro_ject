import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaulterlistComponent } from './defaulterlist.component';

describe('DefaulterlistComponent', () => {
  let component: DefaulterlistComponent;
  let fixture: ComponentFixture<DefaulterlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaulterlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaulterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
