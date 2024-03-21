import { Component } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';

import { MatDialog } from '@angular/material/dialog';
import { AddEditLocationComponent } from '../add-edit-location/add-edit-location.component';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-locationlisting',
  templateUrl: './locationlisting.component.html',
  styleUrls: ['./locationlisting.component.scss'],
})
export class LocationlistingComponent {
  locationlist: any;

  constructor(private api: ApiservicesService, public mat: MatDialog) {}
  ngOnInit() {
    this.getdata();
  }
  getdata() {
    this.api.getlocationdetails().subscribe({
      next: (res) => {
        this.locationlist = res;
        console.log(this.locationlist);
        //this.toast.success(this.userlist.message);
      },
      error: (error) => {
        //  this.toast.error(error);
        alert(error);
      },
    });
  }
  deletelocation(id: number) {
    this.api.deletelocation(id).subscribe({
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
    const dialogRef = this.mat.open(AddEditLocationComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.getdata();
    });
  }
  edit(id: number) {
    const dialogRef = this.mat.open(AddEditLocationComponent, {
      data: { id1: id },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getdata();
    });
  }
  state(state: any) {
    //alert(state.value);
  }
  city(city: any) {
    //  alert(city.value);
  }
  clear(city: MatSelect, state: MatSelect) {
    city.value = null;
    state.value = null;
  }
}
