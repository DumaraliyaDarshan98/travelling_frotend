import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationlistingComponent } from './locationlisting.component';

describe('LocationlistingComponent', () => {
  let component: LocationlistingComponent;
  let fixture: ComponentFixture<LocationlistingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationlistingComponent]
    });
    fixture = TestBed.createComponent(LocationlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
