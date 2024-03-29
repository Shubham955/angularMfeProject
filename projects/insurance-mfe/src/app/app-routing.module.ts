import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// below route gets automatically created
const routes: Routes = [{ path: 'insuranceDisplay', loadChildren: () => import('./insurance-display/insurance-display.module').then(m => m.InsuranceDisplayModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
