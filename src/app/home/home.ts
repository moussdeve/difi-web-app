import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, signal, OnInit } from '@angular/core';

import { PromoService } from '../PromoService'
import { PromoCode } from '../PromoCode';
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
export class Home implements OnInit {

  protected readonly homeTitle = signal('DiFi - Home');
  searchStore: string = '';
  status: any;

  discountCodeList: PromoCode[] = [];
  filteredDiscountList: PromoCode[] = [];
  // discountService: Code = inject(Code);

  constructor(private discountService: PromoService) {}

  async ngOnInit() {
    // (await this.discountService.getStatus()).subscribe((data: any) => {
    //   this.status = data;
    //   console.log('Service status data: ', this.status);
    // });
    this.getStatus();
    this.getFilteredList();
    this.discountService.authenticateUser();
    this.filteredDiscountList = this.discountCodeList;
  }

  public getStatus() {
    this.discountService.getStatus().subscribe((data: any) => {
      this.status = data;
      console.log('Service status data: ', this.status);
    });
  }

  public getFilteredList(): PromoCode[] {
    return this.filteredDiscountList;
  }

  onSearch(): void {
    console.log('Status: ', this.status)
    console.log('Searching for: ', this.searchStore);
    this.discountCodeList = this.discountService.getAllCodes(this.searchStore);
    this.filteredDiscountList = this.discountCodeList;
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
