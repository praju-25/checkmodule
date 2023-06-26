import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryListComponent } from './add-category-list.component';

describe('AddCategoryListComponent', () => {
  let component: AddCategoryListComponent;
  let fixture: ComponentFixture<AddCategoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCategoryListComponent]
    });
    fixture = TestBed.createComponent(AddCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
