import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { Discountcode } from '../discountcode';
import { EntityDiscountCode } from '../entity-discount-code/entity-discount-code';


@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    EntityDiscountCode
  ],
  // template: `
  //   
  // `,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  protected readonly homeTitle = signal('DiFi - Home');
  readonly baseUrl = 'localhost:8080/dap/api/v1.0/des/promoco';
  searchStore: string = '';
  status: any;

  discountCodeList: Discountcode[] = [
    {
      code: 'WELCOME30',
      type: '',
      summary: 'Best for new customers; a free gift is also often included.',
      discount: '30% Off + Free Shipping'
    },
    {
      "code": "WELCOME20",
      "type": "",
      "summary": "Another common welcome offer for new customers.",
      "discount": "20% Off + Free Shipping"
    },
    {
      "code": "CLEAN30",
      "type": "",
      "summary": "A general, high-value discount code.",
      "discount": "30% Off Your Order"
    },
    {
      "code": "TRYGROVE",
      "type": "",
      "summary": "Pay only for the shipping of your VIP trial items.",
      "discount": "Free Starter Kit + Free Shipping"
    },
    {
      "code": "SHIPFREE",
      "type": "",
      "summary": "Usually requires a minimum purchase (e.g., $49).",
      "discount": "Free Shipping on Your Order"
    }
 ];

  onSearch(): void {
    console.log('Searching for: ', this.searchStore);
  }

}
