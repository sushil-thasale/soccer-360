import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMatchObjectsComponent } from './search-match-objects.component';

describe('SearchMatchObjectsComponent', () => {
  let component: SearchMatchObjectsComponent;
  let fixture: ComponentFixture<SearchMatchObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMatchObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMatchObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
