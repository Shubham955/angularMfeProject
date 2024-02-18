import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceDisplayRoutingModule } from './insurance-display-routing.module';
import { InsuranceDisplayComponent } from './insurance-display.component';


@NgModule({
  declarations: [
    InsuranceDisplayComponent
  ],
  imports: [
    CommonModule,
    InsuranceDisplayRoutingModule
  ]
})
export class InsuranceDisplayModule { }
