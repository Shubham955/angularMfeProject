import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PremiumDepositRoutingModule } from './premium-deposit-routing.module';
import { PremiumDepositComponent } from './premium-deposit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PremiumDepositComponent
  ],
  imports: [
    CommonModule,
    PremiumDepositRoutingModule,
    ReactiveFormsModule
  ]
})
export class PremiumDepositModule { }
