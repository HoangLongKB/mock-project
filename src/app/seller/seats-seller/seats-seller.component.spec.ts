import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsSellerComponent } from './seats-seller.component';

describe('SeatsSellerComponent', () => {
  let component: SeatsSellerComponent;
  let fixture: ComponentFixture<SeatsSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatsSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
