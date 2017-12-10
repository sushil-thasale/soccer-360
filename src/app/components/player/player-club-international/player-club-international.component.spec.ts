import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerClubInternationalComponent } from './player-club-international.component';

describe('PlayerClubInternationalComponent', () => {
  let component: PlayerClubInternationalComponent;
  let fixture: ComponentFixture<PlayerClubInternationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerClubInternationalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerClubInternationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
