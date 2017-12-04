import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCommentaryComponent } from './match-commentary.component';

describe('MatchCommentaryComponent', () => {
  let component: MatchCommentaryComponent;
  let fixture: ComponentFixture<MatchCommentaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchCommentaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchCommentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
