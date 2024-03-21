import { Component } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { AddEditTravelingComponent } from '../add-edit-traveling/add-edit-traveling.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-travelinglisting',
  templateUrl: './travelinglisting.component.html',
  styleUrls: ['./travelinglisting.component.scss'],
})
export class TravelinglistingComponent {
  travelinglist: any;

  constructor(private api: ApiservicesService, public mat: MatDialog) {}
  ngOnInit() {
    this.getdata();
  }
  getdata() {
    this.api.gettravelingdetails().subscribe({
      next: (res) => {
        this.travelinglist = res;
        console.log(this.travelinglist);
        //this.toast.success(this.userlist.message);
      },
      error: (error) => {
        //  this.toast.error(error);
        alert(error);
      },
    });
  }
  deletetraveling(id: number) {
    this.api.deletetraveling(id).subscribe({
      next: (res) => {
        console.log('delete');
        this.getdata();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  editaddopen() {
    const dialogRef = this.mat.open(AddEditTravelingComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.getdata();
    });
  }
  edit(id: number) {
    const dialogRef = this.mat.open(AddEditTravelingComponent, {
      data: { id1: id },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getdata();
    });
  }
}
