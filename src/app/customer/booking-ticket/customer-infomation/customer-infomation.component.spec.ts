import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfomationComponent } from './customer-infomation.component';

describe('CustomerInfomationComponent', () => {
  let component: CustomerInfomationComponent;
  let fixture: ComponentFixture<CustomerInfomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInfomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
