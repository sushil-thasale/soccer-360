import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeNewComponent } from './user-home-new.component';

describe('UserHomeNewComponent', () => {
  let component: UserHomeNewComponent;
  let fixture: ComponentFixture<UserHomeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHomeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
