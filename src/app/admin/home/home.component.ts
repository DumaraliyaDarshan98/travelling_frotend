import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeAdminComponent {
  data: any;
  constructor(private api: ApiservicesService,private router:Router) {
    console.log('hello');
  }
  ngOnInt() {}
  logout()
  {
    localStorage.setItem('chechlogin','false');
     this.router.navigate(['/home']).then(() => {
    window.location.reload();
  })
}
}
