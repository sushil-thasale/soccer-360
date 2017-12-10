import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerFactsComponent } from './player-facts.component';

describe('PlayerFactsComponent', () => {
  let component: PlayerFactsComponent;
  let fixture: ComponentFixture<PlayerFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
