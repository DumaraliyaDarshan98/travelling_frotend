import { Component } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-booktraveling',
  templateUrl: './booktraveling.component.html',
  styleUrls: ['./booktraveling.component.scss'],
})
export class BooktravelingComponent {
  travelingdata: any;
  displayFullParagraphs: boolean[] = [];
  isFavorite: boolean[] = [];
  demo: any;

  constructor(private api: ApiservicesService) {}
  ngOnInit() {
    this.getdata();
    this.demo = 'mayur';
  }

  getdata() {
    this.api.gettravelingdetails().subscribe({
      next: (res) => {
        this.travelingdata = res;
        console.log(this.travelingdata);
        this.displayFullParagraphs = new Array(this.travelingdata.length).fill(
          true
        );
        this.isFavorite = new Array(this.travelingdata.length).fill(false);
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
  state(state: any) {
    alert(state.value);
  }
  city(city: any) {
    alert(city.value);
  }
  clear(city: MatSelect, state: MatSelect) {
    city.value = null;
    state.value = null;
  }
}
