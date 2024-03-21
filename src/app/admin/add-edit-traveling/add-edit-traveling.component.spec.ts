import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTravelingComponent } from './add-edit-traveling.component';

describe('AddEditTravelingComponent', () => {
  let component: AddEditTravelingComponent;
  let fixture: ComponentFixture<AddEditTravelingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditTravelingComponent]
    });
    fixture = TestBed.createComponent(AddEditTravelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
