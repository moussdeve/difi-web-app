import { Component, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule } from "@angular/router";

import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    RouterOutlet,
    Navbar,
    RouterModule
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
