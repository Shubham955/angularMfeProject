import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsuranceManipulationService {

  constructor(private httpClient: HttpClient) { }
  url: string = "http://localhost:3001"

  /**
   * returns insurance details based on insurance number
   * @param insuranceNumber 
   * @returns 
   */
  getInsuranceByInsuranceNumber(insuranceNumber:any){
    return this.httpClient.get(`${this.url}/getInsurance/${insuranceNumber}`);
  }
}
