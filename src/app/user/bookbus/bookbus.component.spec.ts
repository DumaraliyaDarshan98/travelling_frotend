import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbusComponent } from './bookbus.component';

describe('BookbusComponent', () => {
  let component: BookbusComponent;
  let fixture: ComponentFixture<BookbusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookbusComponent]
    });
    fixture = TestBed.createComponent(BookbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
