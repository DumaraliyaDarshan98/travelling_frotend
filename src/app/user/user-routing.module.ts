import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookbusComponent } from './bookbus/bookbus.component';
import { BooktravelingComponent } from './booktraveling/booktraveling.component';
import { BusdetailsComponent } from './busdetails/busdetails.component';
import { TravelingdetailsComponent } from './travelingdetails/travelingdetails.component';

const routes: Routes = [
  {
    path: '',
    component: BookbusComponent,
  },
  {
    path: 'bookbus',
    component: BookbusComponent,
  },
  {
    path: 'booktraveling',
    component: BooktravelingComponent,
  },
  {
    path: 'busdetails:/id',
    component: BusdetailsComponent,
  },
  {
    path: 'travelingdetails/:id',
    component: TravelingdetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
