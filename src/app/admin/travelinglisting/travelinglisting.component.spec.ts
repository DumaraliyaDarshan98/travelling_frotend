import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelinglistingComponent } from './travelinglisting.component';

describe('TravelinglistingComponent', () => {
  let component: TravelinglistingComponent;
  let fixture: ComponentFixture<TravelinglistingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelinglistingComponent]
    });
    fixture = TestBed.createComponent(TravelinglistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
