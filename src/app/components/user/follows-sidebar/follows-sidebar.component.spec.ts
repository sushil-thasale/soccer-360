import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowsSidebarComponent } from './follows-sidebar.component';

describe('FollowsSidebarComponent', () => {
  let component: FollowsSidebarComponent;
  let fixture: ComponentFixture<FollowsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
