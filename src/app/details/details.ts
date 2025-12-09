import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DiscountCode } from '../discountcode';
import { Code } from '../code'

@Component({
  selector: 'app-details',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {

  route: ActivatedRoute = inject(ActivatedRoute);
  discountService: Code = inject(Code);
  discountCode: DiscountCode | undefined;

  // create the form object
  sendCodeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const discountCodeName = String(this.route.snapshot.params['code']);
    this.discountCode = this.discountService.getDiscountCodeByName(discountCodeName);
  }

  // Handle Send Click
  sendCode() {
    this.discountService.sendCode(
      this.sendCodeForm.value.firstName ?? '',
      this.sendCodeForm.value.lastName ?? '',
      this.sendCodeForm.value.email ?? ''
    );
  }
}
