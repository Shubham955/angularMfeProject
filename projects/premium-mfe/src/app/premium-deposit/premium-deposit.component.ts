import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InsuranceManipulationService } from '../insurance-manipulation.service';

@Component({
  selector: 'app-premium-deposit',
  templateUrl: './premium-deposit.component.html',
  styleUrl: './premium-deposit.component.sass'
})
export class PremiumDepositComponent implements OnInit {
  numberInputForm = new FormGroup(
    {
      insuranceNumber: new FormControl()
    }
  );
  amountDepositForm = new FormGroup(
    {
      Name: new FormControl(''),
      PolicyName: new FormControl(''),
      CurrentDeposit: new FormControl()
    }
  );
  currDeposit = 0;
  insuranceNotFound: boolean=false;
  updatedInsurance:any;

  constructor(public ims: InsuranceManipulationService) { }
  ngOnInit(): void {
  }

  fetchInsuranceDetails() {
    this.ims.getInsuranceByInsuranceNumber(this.numberInputForm.value['insuranceNumber']).subscribe((result) => {
      console.warn("fetcehd ", result)
      if (-1 == result['InsuranceNumber']) {
        this.insuranceNotFound = true;
      } else {
        this.insuranceNotFound=false;
        this.currDeposit = result['CurrentDeposit']
        console.warn("curr dep after 1st fetch", this.currDeposit)
        this.amountDepositForm = new FormGroup(
          {
            Name: new FormControl(result['Name']),
            PolicyName: new FormControl(result['PolicyName']),
            CurrentDeposit: new FormControl()
          }
        )
      }
    })
  }

  depositAmount() {
    let userDepositedMoney = this.amountDepositForm.value['CurrentDeposit'];
    this.amountDepositForm.value['CurrentDeposit'] = (+this.currDeposit + +(userDepositedMoney));
    console.log("before update call", this.amountDepositForm.value)
    this.ims.updateGivenInsurance(this.numberInputForm.value['insuranceNumber'], this.amountDepositForm.value).subscribe((result) => {
      console.warn("after update", result)
      this.updatedInsurance=result;
    })
  }
}
