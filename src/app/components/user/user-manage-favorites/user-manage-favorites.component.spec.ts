import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManageFavoritesComponent } from './user-manage-favorites.component';

describe('UserManageFavoritesComponent', () => {
  let component: UserManageFavoritesComponent;
  let fixture: ComponentFixture<UserManageFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManageFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManageFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
