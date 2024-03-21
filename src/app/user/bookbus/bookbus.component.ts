import { Component } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-bookbus',
  templateUrl: './bookbus.component.html',
  styleUrls: ['./bookbus.component.scss'],
})
export class BookbusComponent {
  demoBook: any;
  displayFullParagraphs: boolean[] = [];
  isFavorite: boolean[] = [];
  constructor(private api: ApiservicesService) {}
  ngOnInit() {
    this.getdata();
  }

  getdata() {
    this.api.getlocationdetails().subscribe({
      next: (res) => {
        this.demoBook = res;
        console.log(this.demoBook);
        this.displayFullParagraphs = new Array(this.demoBook.length).fill(true);
        this.isFavorite = new Array(this.demoBook.length).fill(false);
      },
      error: (error) => {
        alert(error.message);
      },
    });
  }

  //paragraphData: string = 'Your long paragraph data goes here...'; // Example data

  toggleDisplay(index: number) {
    this.displayFullParagraphs[index] = !this.displayFullParagraphs[index];
  }

  toggleFavorite(index: number) {
    this.isFavorite[index] = !this.isFavorite[index];
  }
  prevButton = document.getElementById('prev-button');
  nextButton = document.getElementById('next-button');

  showNavButtons(): void {
    document.getElementById('prev-button')!.style.display = 'block';
    document.getElementById('next-button')!.style.display = 'block';
  }

  hideNavButtons(): void {
    document.getElementById('prev-button')!.style.display = 'none';
    document.getElementById('next-button')!.style.display = 'none';
  }
  // sum(a: string, b: string) {
  //   // let x = +a;
  //   let x = parseInt(a);
  //   let x1 = parseInt(b);
  //   // let y = +b;
  //   alert(x + x1);
  // }
}
