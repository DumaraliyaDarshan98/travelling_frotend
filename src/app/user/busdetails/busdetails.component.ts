import { Component } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-busdetails',
  templateUrl: './busdetails.component.html',
  styleUrls: ['./busdetails.component.scss'],
})
export class BusdetailsComponent {
  data: any;
  id: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiservicesService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit() {
    this.api.getlocation(this.id).subscribe({
      next: (res) => {
        this.data = res;
        console.log(this.data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  back() {
    this.router.navigate(['user/bookbus']);
  }
}
