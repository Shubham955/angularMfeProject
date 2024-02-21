import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PremiumDepositComponent } from './premium-deposit.component';

const routes: Routes = [{ path: '', component: PremiumDepositComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PremiumDepositRoutingModule { }
