import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DiscountCode } from '../discountcode';
import { Code } from '../code'

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {

  route: ActivatedRoute = inject(ActivatedRoute);
  discountService: Code = inject(Code);
  discountCode: DiscountCode | undefined;

  constructor() {
    const discountCodeName = String(this.route.snapshot.params['code']);
    this.discountCode = this.discountService.getDiscountCodeByName(discountCodeName);
  }
}
