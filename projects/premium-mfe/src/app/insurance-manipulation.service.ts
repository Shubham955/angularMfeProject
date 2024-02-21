import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsuranceManipulationService {

  constructor(private httpClient: HttpClient) { }
  url: string = "http://localhost:3001"

  /**
   * returns insurance details using insurance number
   * @param insuranceNumber 
   * @returns 
   */
  getInsuranceByInsuranceNumber(insuranceNumber:any){
    return this.httpClient.get(`${this.url}/getInsurance/${insuranceNumber}`);
  }

  /**
   * returns updated instance, updations are done (on insurance with insuranceNumber) as
   *  recieved in data 
   * @param insuranceNumber 
   * @param data 
   * @returns 
   */
  updateGivenInsurance(insuranceNumber: any, data: any){
    return this.httpClient.put(`${this.url}/updateInsurance/${insuranceNumber}`, data);
  }

}
