import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisteredHomeUserProfileComponent } from './unregistered-home-user-profile.component';

describe('UnregisteredHomeUserProfileComponent', () => {
  let component: UnregisteredHomeUserProfileComponent;
  let fixture: ComponentFixture<UnregisteredHomeUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnregisteredHomeUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregisteredHomeUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
