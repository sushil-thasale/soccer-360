import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredUserHomeComponent } from './registered-user-home.component';

describe('RegisteredUserHomeComponent', () => {
  let component: RegisteredUserHomeComponent;
  let fixture: ComponentFixture<RegisteredUserHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredUserHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
