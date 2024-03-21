import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { LocationlistingComponent } from './locationlisting/locationlisting.component';
import { TravelinglistingComponent } from './travelinglisting/travelinglisting.component';

const routes: Routes = [
  {
    path: '',
    component: HomeAdminComponent,
    children: [
      {
        path: '',
        component: UserListComponent,
      },
      {
        path: 'userList',
        component: UserListComponent,
      },
      {
        path: 'locationlisting',
        component: LocationlistingComponent,
      },
      {
        path: 'travelinglisting',
        component: TravelinglistingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
