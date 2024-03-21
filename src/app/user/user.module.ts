import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { BookbusComponent } from './bookbus/bookbus.component';
import { BooktravelingComponent } from './booktraveling/booktraveling.component';
import { BusdetailsComponent } from './busdetails/busdetails.component';
import { TravelingdetailsComponent } from './travelingdetails/travelingdetails.component';

@NgModule({
  declarations: [BookbusComponent, BooktravelingComponent, BusdetailsComponent, TravelingdetailsComponent],
  imports: [CommonModule, UserRoutingModule, MatSelectModule],
})
export class UserModule {}
