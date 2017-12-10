import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerNationalComponent } from './player-national.component';

describe('PlayerNationalComponent', () => {
  let component: PlayerNationalComponent;
  let fixture: ComponentFixture<PlayerNationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerNationalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
