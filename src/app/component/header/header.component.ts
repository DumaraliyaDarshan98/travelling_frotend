import { Component, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  checklogin: any;
  constructor(
    private injector: Injector,
    private router: Router,
    private api: ApiservicesService
  ) {}

  ngOnInit() {
    this.checklogin = localStorage.getItem('login');
  }

  logout() {
    localStorage.setItem('login', 'false');
    localStorage.setItem('checklogin', 'false');

    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }
}
