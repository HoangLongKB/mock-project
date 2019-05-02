import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsSellerComponent } from './tickets-seller.component';

describe('TicketsSellerComponent', () => {
  let component: TicketsSellerComponent;
  let fixture: ComponentFixture<TicketsSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketsSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
