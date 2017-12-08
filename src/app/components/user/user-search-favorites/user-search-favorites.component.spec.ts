import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchFavoritesComponent } from './user-search-favorites.component';

describe('UserSearchFavoritesComponent', () => {
  let component: UserSearchFavoritesComponent;
  let fixture: ComponentFixture<UserSearchFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
