import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule
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
