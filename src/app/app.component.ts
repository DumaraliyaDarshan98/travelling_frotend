import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tour_travels';

  constructor() {
     localStorage.setItem('login', 'false');
     localStorage.setItem('checklogin', 'false');
  }
}
