import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceDisplayRoutingModule } from './insurance-display-routing.module';
import { InsuranceDisplayComponent } from './insurance-display.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InsuranceDisplayComponent
  ],
  imports: [
    CommonModule,
    InsuranceDisplayRoutingModule,
    ReactiveFormsModule
  ]
})
export class InsuranceDisplayModule { }
