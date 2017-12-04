import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchFactsComponent } from './match-facts.component';

describe('MatchFactsComponent', () => {
  let component: MatchFactsComponent;
  let fixture: ComponentFixture<MatchFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
