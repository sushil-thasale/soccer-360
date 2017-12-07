import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchLeaguesComponent } from './user-search-leagues.component';

describe('UserSearchLeaguesComponent', () => {
  let component: UserSearchLeaguesComponent;
  let fixture: ComponentFixture<UserSearchLeaguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchLeaguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
