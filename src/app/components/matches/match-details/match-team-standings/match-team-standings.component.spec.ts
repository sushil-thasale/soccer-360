import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTeamStandingsComponent } from './match-team-standings.component';

describe('MatchTeamStandingsComponent', () => {
  let component: MatchTeamStandingsComponent;
  let fixture: ComponentFixture<MatchTeamStandingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchTeamStandingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchTeamStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
