import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginform: FormGroup;
  logindata: any;
  data: any;

  constructor(
    private fb: FormBuilder,
    private api: ApiservicesService,
    private router: Router
  ) {
    this.loginform = this.fb.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() { }

  submitform() {
    if (this.loginform.valid) {
      this.api.userLogin(this.loginform.value).subscribe({
        next: (res: any) => {
          localStorage.setItem('loginUser', JSON.stringify(res?.data));
          if (res?.role == 1) {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/home'])
          }
        },
        error: (error) => {
          alert('please enter correct email & password');
        },
      });
    }
  }
}
