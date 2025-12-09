/**
 * Discount Code Service Class: 
 */
import { Injectable } from '@angular/core';
import { DiscountCode } from './discountcode';

@Injectable({
  providedIn: 'root'
})
export class Code {
  discountCodeList: DiscountCode[] = [
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

  // Returns all discount codes associated with the store
  getAllCodes(): DiscountCode[] {
    return this.discountCodeList;
  }

  // // TODO: return discount code by id
  // getCodeById(id: number): Discountcode | undefined {
  //   return this.discountCodeList.find(dc => dc.id === id);
  // }

  // Get discount code by code name/string
  getDiscountCodeByName(dc: string): DiscountCode | undefined {
    return this.discountCodeList.find(cc => cc.code === dc);
  }

  // Method to send form data
  sendCode(firstName: string, lastName: string, email: string) {
    console.log(`Discount Code application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
  
}
