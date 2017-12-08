import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisteredHomeFooterComponent } from './unregistered-home-footer.component';

describe('UnregisteredHomeFooterComponent', () => {
  let component: UnregisteredHomeFooterComponent;
  let fixture: ComponentFixture<UnregisteredHomeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnregisteredHomeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregisteredHomeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
