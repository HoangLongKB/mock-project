import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialDialogContentComponent } from './social-dialog-content.component';

describe('SocialDialogContentComponent', () => {
  let component: SocialDialogContentComponent;
  let fixture: ComponentFixture<SocialDialogContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialDialogContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
