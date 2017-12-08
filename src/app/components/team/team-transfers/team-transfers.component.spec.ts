import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTransfersComponent } from './team-transfers.component';

describe('TeamTransfersComponent', () => {
  let component: TeamTransfersComponent;
  let fixture: ComponentFixture<TeamTransfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamTransfersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
