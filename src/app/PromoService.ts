/**
 * Discount Code Service Class: 
 */
import { inject, Injectable, OnInit } from '@angular/core';
import { PromoCode } from './PromoCode';
import { HttpClient } from '@angular/common/http';


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

  // DAP-AUTH API endpoints
  private readonly LOGIN_API = "/login";
  private readonly AUTH_API = "http://localhost:8080/dap/api/v1.0/auth";

  // DAP-DES API endpoints
  private readonly CODE_API = "/promoco?store=";
  private readonly STATUS_API = "/status";
  private readonly baseUrl = "http://localhost:8080/dap/api/v1.0/des";

  discountCodeList: PromoCode[] = [];
  private loginResponse: LoginResponse | undefined;

  constructor() {}

  // Returns all discount codes associated with the store
  getAllCodes(storeName: string): PromoCode[] {

    this.http.get<PromoCode[]>(this.baseUrl.concat(this.CODE_API, storeName), { responseType: 'json' })
      .subscribe((data: PromoCode[]) => {
        this.discountCodeList = data;
      });
      
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
    return this.http.get<any[]>(
      (this.baseUrl.concat(this.STATUS_API)),
      {responseType: 'text' as 'json'});
  }


  // Authenticate user and return login response here for now
  // Later, we can decouple this to an AuthService
  authenticateUser() {

    const loginData = {
      // username: "<username>",
      // password: "<password>"
    };

    // return this.http.post<LoginResponse>(
    //   (this.AUTH_API.concat(this.LOGIN_API)),
    //   loginData
    // );

    this.http.post(this.AUTH_API.concat(this.LOGIN_API), loginData);
  }
  
}
