import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktravelingComponent } from './booktraveling.component';

describe('BooktravelingComponent', () => {
  let component: BooktravelingComponent;
  let fixture: ComponentFixture<BooktravelingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooktravelingComponent]
    });
    fixture = TestBed.createComponent(BooktravelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
