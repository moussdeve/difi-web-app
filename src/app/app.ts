import { Component, OnInit, signal, inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
export class App {
  
  protected readonly title = signal('DiFi');
  searchStore: string = '';

  onSearch(): void {
    console.log('Searching for: ', this.searchStore);
  }

} 
