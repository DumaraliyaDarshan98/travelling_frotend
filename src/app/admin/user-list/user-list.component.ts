import { Component } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  userlist: any;
  deleteno: number = 0;
  constructor(private api: ApiservicesService) {}
  ngOnInit() {
    this.getdata();
  }
  getdata() {
    this.api.getlogindetails().subscribe({
      next: (res) => {
        this.userlist = res;
        //this.toast.success(this.userlist.message);
      },
      error: (error) => {
        //  this.toast.error(error);
        alert(error);
      },
    });
  }
  recordDelete(id: number) {
    this.deleteno = id;
    const doc = document.getElementById('myModal');
    if (doc != null) {
      doc.style.display = 'block';
      doc.style.backdropFilter = 'blur(10px)';
      document.body.style.overflow = 'hidden';
    }
  }
  deletebuttonyes() {
    this.api.deleteuser(this.deleteno).subscribe({
      next: (res) => {
        console.log('delete');
        this.getdata();
      },
      error: (error) => {
        console.log(error);
      },
    });

    const doc = document.getElementById('myModal');
    if (doc != null) {
      doc.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }

  deletebuttonclose() {
    const doc = document.getElementById('myModal');
    if (doc != null) {
      doc.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }
}
