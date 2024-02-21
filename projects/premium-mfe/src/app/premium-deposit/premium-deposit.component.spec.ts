import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumDepositComponent } from './premium-deposit.component';

describe('PremiumDepositComponent', () => {
  let component: PremiumDepositComponent;
  let fixture: ComponentFixture<PremiumDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PremiumDepositComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PremiumDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
