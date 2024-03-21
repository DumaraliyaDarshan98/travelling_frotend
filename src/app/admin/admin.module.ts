import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { LocationlistingComponent } from './locationlisting/locationlisting.component';
import { TravelinglistingComponent } from './travelinglisting/travelinglisting.component';
import { HomeAdminComponent } from './home/home.component';
import { AddEditLocationComponent } from './add-edit-location/add-edit-location.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AddEditTravelingComponent } from './add-edit-traveling/add-edit-traveling.component';

//import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    HomeAdminComponent,
    UserListComponent,
    LocationlistingComponent,
    TravelinglistingComponent,
    AddEditLocationComponent,
    AddEditTravelingComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class AdminModule {}
