import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLocationComponent } from './add-edit-location.component';

describe('AddEditLocationComponent', () => {
  let component: AddEditLocationComponent;
  let fixture: ComponentFixture<AddEditLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditLocationComponent]
    });
    fixture = TestBed.createComponent(AddEditLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
