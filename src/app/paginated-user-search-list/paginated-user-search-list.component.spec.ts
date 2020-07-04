import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedUserSearchListComponent } from './paginated-user-search-list.component';

describe('PaginatedUserSearchListComponent', () => {
  let component: PaginatedUserSearchListComponent;
  let fixture: ComponentFixture<PaginatedUserSearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatedUserSearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatedUserSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
