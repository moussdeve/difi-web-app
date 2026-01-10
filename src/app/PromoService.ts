/**
 * Discount Code Service Class: 
 */
import { inject, Injectable, OnInit } from '@angular/core';
import { PromoCode } from './PromoCode';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromoService{

  private http = inject(HttpClient);
  private readonly baseUrl = "http://localhost:8080/dap/api/v1.0/des/status";

  discountCodeList: PromoCode[] = [
    {
      code: 'WELCOME30',
      type: 'Coupon',
      summary: 'Best for new customers; a free gift is also often included.',
      discount: '30% Off + Free Shipping'
    },
    {
      "code": "WELCOME20",
      "type": "Coupon",
      "summary": "Another common welcome offer for new customers.",
      "discount": "20% Off + Free Shipping"
    },
    {
      "code": "CLEAN30",
      "type": "Coupon",
      "summary": "A general, high-value discount code.",
      "discount": "30% Off Your Order"
    },
    {
      "code": "TRYGROVE",
      "type": "Coupon",
      "summary": "Pay only for the shipping of your VIP trial items.",
      "discount": "Free Starter Kit + Free Shipping"
    },
    {
      "code": "SHIPFREE",
      "type": "Coupon",
      "summary": "Usually requires a minimum purchase (e.g., $49).",
      "discount": "Free Shipping on Your Order"
    }
  ];

  // constructor(private http: HttpClient) { }
  // // ngOnInit(): void {
  // //   this.getAllCodes();
  // //   this.getStatus();
  // // }

  // Returns all discount codes associated with the store
  getAllCodes(): PromoCode[] {
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
      this.baseUrl,
      {responseType: 'text' as 'json'});
  }
  
}
