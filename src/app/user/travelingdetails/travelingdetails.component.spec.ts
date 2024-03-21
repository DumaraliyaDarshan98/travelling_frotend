import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelingdetailsComponent } from './travelingdetails.component';

describe('TravelingdetailsComponent', () => {
  let component: TravelingdetailsComponent;
  let fixture: ComponentFixture<TravelingdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelingdetailsComponent]
    });
    fixture = TestBed.createComponent(TravelingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
