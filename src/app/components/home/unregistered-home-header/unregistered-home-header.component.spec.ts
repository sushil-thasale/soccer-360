import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisteredHomeHeaderComponent } from './unregistered-home-header.component';

describe('UnregisteredHomeHeaderComponent', () => {
  let component: UnregisteredHomeHeaderComponent;
  let fixture: ComponentFixture<UnregisteredHomeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnregisteredHomeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregisteredHomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
