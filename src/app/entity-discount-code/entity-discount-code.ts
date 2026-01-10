import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoCode } from '../PromoCode';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-entity-discount-code',
  imports: [RouterLink],
  // template: `
  //   <p>
  //     entity-discount-code works!
  //   </p>
  // `,
  templateUrl: './entity-discount-code.html',
  styleUrl: './entity-discount-code.css'
})
export class EntityDiscountCode {
  @Input() discountCode!: PromoCode;
}
