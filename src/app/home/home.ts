import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, signal, Inject, importProvidersFrom, inject } from '@angular/core';

import { Code } from '../code'
import { DiscountCode } from '../discountcode';
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

  discountCodeList: DiscountCode[] = [];
  discountService: Code = inject(Code);

  constructor() {
    this.discountCodeList = this.discountService.getAllCodes();
  }

  onSearch(): void {
    console.log('Searching for: ', this.searchStore);
  }

}
