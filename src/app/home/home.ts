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
  filteredDiscountList: DiscountCode[] = [];
  discountService: Code = inject(Code);

  constructor() {
    this.status = this.discountService.getStatus();
    this.discountCodeList = this.discountService.getAllCodes();
    this.filteredDiscountList = this.discountCodeList;
  }

  onSearch(): void {
    console.log('Status: ', this.status)
    console.log('Searching for: ', this.searchStore);
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredDiscountList = this.discountCodeList;
      return;
    }

    this.filteredDiscountList = this.discountCodeList.filter(
      discountCode => discountCode?.code.toLowerCase().includes(text.toLowerCase())
    );
  }

}
