import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerderNewComponent } from './herder-new.component';

describe('HerderNewComponent', () => {
  let component: HerderNewComponent;
  let fixture: ComponentFixture<HerderNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerderNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
