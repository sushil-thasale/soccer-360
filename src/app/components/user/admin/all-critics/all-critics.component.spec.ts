import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCriticsComponent } from './all-critics.component';

describe('AllCriticsComponent', () => {
  let component: AllCriticsComponent;
  let fixture: ComponentFixture<AllCriticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCriticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCriticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
