import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchLineupComponent } from './match-lineup.component';

describe('MatchLineupComponent', () => {
  let component: MatchLineupComponent;
  let fixture: ComponentFixture<MatchLineupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchLineupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchLineupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
