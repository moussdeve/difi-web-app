import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { EntityDiscountCode } from '../entity-discount-code/entity-discount-code';


@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    EntityDiscountCode
  ],
  // template: `
  //   <p>
  //     home works!
  //   </p>
  // `,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  protected readonly homeTitle = signal('DiFi - Home');
  searchStore: string = '';
  status: any;

  onSearch(): void {
    console.log('Searching for: ', this.searchStore);
  }

}
