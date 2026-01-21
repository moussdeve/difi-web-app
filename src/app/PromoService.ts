/**
 * Discount Code Service Class: 
 */
import { inject, Injectable, OnInit } from '@angular/core';
import { PromoCode } from './PromoCode';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { A } from '@angular/cdk/keycodes';
import { stat } from 'fs';


// Login response interface
interface LoginResponse {
  token: string;
  username: string;
  type: string;
}


// Status response interface
interface StatusResponse {
  status: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class PromoService{

  private http = inject(HttpClient);


  discountCodeList: PromoCode[] = [];
  private loginResponse: LoginResponse | undefined;

  constructor() {}

  // Returns all discount codes associated with the store
  getAllCodes(storeName: string): PromoCode[] {
    const url = environment.desPromocodeApiUrl.concat(storeName);

    console.log('Fetching all promo codes for store: ', storeName, ' ...');
    console.log('Using API URL: ', url, ' ...');

    try {

      this.http.get<PromoCode[]>(url, {
        withCredentials: true
      })
      .subscribe((data: PromoCode[]) => {
        this.discountCodeList = data;
      });

    } catch (error) {
      console.error('Error fetching promo codes for store: ', storeName, ' ...');
      this.discountCodeList = [];
    }
      
    return this.discountCodeList;
  }


  // // TODO: return discount code by id
  // getCodeById(id: number): PromoCode | undefined {
  //   return this.discountCodeList.find(dc => dc.id === id);
  // }


  // Get discount code by code name/string
  getDiscountCodeByName(dc: string): PromoCode | undefined {
    return this.discountCodeList.find(cc => cc.code === dc);
  }


  // Method to send form data
  sendCode(firstName: string, lastName: string, email: string) {
    console.log(`Discount Code application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }


  public getStatus(): any {
    console.log('Fetching service status ...');

    let status: any;

    try {

      status = this.http.get<any>(
        (environment.desStatusApiUrl),
        {responseType: 'text' as 'json'});

    } catch (error) {
      console.error('Error fetching status ...');
      status = {status: 'ERROR', timestamp: new Date().toISOString()};
    }
    finally {
      return status;
    }
    
  }


  // Authenticate user and return login response here for now
  // Later, we can decouple this to an AuthService
  authenticateUser() {

    const loginData = {
      // username: "<YOUR_USERNAME>",
      // password: "<YOUR_PASSWORD>"
    };

    // return this.http.post<LoginResponse>(
    //   (this.AUTH_API.concat(this.LOGIN_API)),
    //   loginData
    // );

    this.http.post(environment.authLoginUrl, loginData);
  }
  
}
