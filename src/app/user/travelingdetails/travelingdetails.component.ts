import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-travelingdetails',
  templateUrl: './travelingdetails.component.html',
  styleUrls: ['./travelingdetails.component.scss'],
})
export class TravelingdetailsComponent {
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
    this.api.gettraveling(this.id).subscribe({
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
    this.router.navigate(['user/booktraveling']);
  }
}
