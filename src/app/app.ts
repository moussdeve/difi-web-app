import { Component, OnInit, signal, inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Data } from './data';
import { RouterOutlet } from "@angular/router";
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    RouterOutlet,
    Navbar
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('DiFi');
  searchStore: string = '';

  private dataService = inject(Data);

  onSearch(): void {
    console.log('Searching for: ', this.searchStore);
  }

  ngOnInit(): void {
      // this.dataService.checkStatus().subscribe({
      //   next: (response) => {
      //     this.status = response;
      //     console.log('Service status: ', response);
      //   },
      //   error: (error) => {
      //     console.log('Error fetching status: ', error)
      //   }
      // })
  }

} 
