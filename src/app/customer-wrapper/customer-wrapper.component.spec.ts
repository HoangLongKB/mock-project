import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerWrapperComponent } from './customer-wrapper.component';

describe('CustomerWrapperComponent', () => {
  let component: CustomerWrapperComponent;
  let fixture: ComponentFixture<CustomerWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
