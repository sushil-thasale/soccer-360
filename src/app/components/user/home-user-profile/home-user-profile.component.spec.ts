import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserProfileComponent } from './home-user-profile.component';

describe('HomeUserProfileComponent', () => {
  let component: HomeUserProfileComponent;
  let fixture: ComponentFixture<HomeUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
