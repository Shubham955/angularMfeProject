import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceDisplayComponent } from './insurance-display.component';

describe('InsuranceDisplayComponent', () => {
  let component: InsuranceDisplayComponent;
  let fixture: ComponentFixture<InsuranceDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsuranceDisplayComponent]
    });
    fixture = TestBed.createComponent(InsuranceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
