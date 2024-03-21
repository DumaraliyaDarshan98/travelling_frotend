import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrtionComponent } from './registrtion.component';

describe('RegistrtionComponent', () => {
  let component: RegistrtionComponent;
  let fixture: ComponentFixture<RegistrtionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrtionComponent]
    });
    fixture = TestBed.createComponent(RegistrtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
