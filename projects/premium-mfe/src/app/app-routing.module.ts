import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// below route automatically created
const routes: Routes = [{ path: 'premiumDeposit', loadChildren: () => import('./premium-deposit/premium-deposit.module').then(m => m.PremiumDepositModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
