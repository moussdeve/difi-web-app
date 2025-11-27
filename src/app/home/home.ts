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

  discountCode: Discountcode = {
    code: 'WELCOME30',
    type: '',
    summary: 'Best for new customers; a free gift is also often included.',
    discount: '30% Off + Free Shipping'
  };

  onSearch(): void {
    console.log('Searching for: ', this.searchStore);
  }

}
