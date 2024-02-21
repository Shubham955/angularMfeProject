import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'insuranceDisplay',
    loadChildren: ()=>import('insuranceMfe/Module').then((m)=>m.InsuranceDisplayModule) 
  },
  {
    path: 'premiumDeposit',
    // string written in below import has to be declared in types.d.ts file
    // in import i have written name as in mfe webpack.config.js and after this name 
    // Module written as we exposed module, and in then we have done m.name as in 
    // premium-deposit.module.ts ke export class ke aage jo likha hai
    loadChildren: ()=>import('premiumMfe/Module').then((m)=>m.PremiumDepositModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
