import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DiFi');
  searchStore: string = '';
  coupons: any[] = [];
  status: any[] = [];

  onSearch(): void {
    console.log('Searching for:', this.searchStore)
  }
}
