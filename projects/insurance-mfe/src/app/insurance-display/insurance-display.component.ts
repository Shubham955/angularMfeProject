import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InsuranceManipulationService } from '../insurance-manipulation.service';

@Component({
  selector: 'app-insurance-display',
  templateUrl: './insurance-display.component.html',
  styleUrls: ['./insurance-display.component.sass']
})
export class InsuranceDisplayComponent implements OnInit{

  showInsuranceDetails: boolean=false;
  insuranceNotFound: boolean=false;
  fid: any;
  
  numberInputForm= new FormGroup(
    {
      insuranceNumber: new FormControl()
    }
  );

  constructor(public ims: InsuranceManipulationService){}
  ngOnInit(): void {
  }

  fetchInsuranceDetails() {
    this.ims.getInsuranceByInsuranceNumber(this.numberInputForm.value['insuranceNumber']).subscribe((result)=>{
      console.warn("fetched result is ", result)
      if(-1 == result['InsuranceNumber']){
        this.insuranceNotFound=true;
        this.showInsuranceDetails=false;
      } else {
        this.fid=result;
        this.showInsuranceDetails=true;
        this.insuranceNotFound=false;
      }
    })
  }
}
