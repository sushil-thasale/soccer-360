import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerClubComponent } from './player-club.component';

describe('PlayerClubComponent', () => {
  let component: PlayerClubComponent;
  let fixture: ComponentFixture<PlayerClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
