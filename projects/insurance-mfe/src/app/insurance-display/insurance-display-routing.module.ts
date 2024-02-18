import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceDisplayComponent } from './insurance-display.component';

const routes: Routes = [{ path: '', component: InsuranceDisplayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceDisplayRoutingModule { }
