import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchObjectsComponent } from './search-objects.component';

describe('SearchObjectsComponent', () => {
  let component: SearchObjectsComponent;
  let fixture: ComponentFixture<SearchObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
