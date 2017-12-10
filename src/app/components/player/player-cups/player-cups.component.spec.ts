import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCupsComponent } from './player-cups.component';

describe('PlayerCupsComponent', () => {
  let component: PlayerCupsComponent;
  let fixture: ComponentFixture<PlayerCupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerCupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
