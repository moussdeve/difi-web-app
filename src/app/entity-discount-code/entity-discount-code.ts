import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Discountcode } from '../discountcode';

@Component({
  selector: 'app-entity-discount-code',
  imports: [],
  template: `
    <p>
      entity-discount-code works!
    </p>
  `,
  styleUrl: './entity-discount-code.css'
})
export class EntityDiscountCode {
  @Input() discountCode!: Discountcode;
}
