import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Discountcode } from '../discountcode';
import { Code } from '../code'

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {

  route: ActivatedRoute = inject(ActivatedRoute);
  discountCodeName: string = "default";

  constructor() {
    this.discountCodeName = String(this.route.snapshot.params['code']);
  }
}
