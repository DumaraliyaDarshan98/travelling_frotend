import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-registrtion',
  templateUrl: './registrtion.component.html',
  styleUrls: ['./registrtion.component.scss'],
})
export class RegistrtionComponent {
  userform: FormGroup;
  formdata: any;
  constructor(private fb: FormBuilder, private api: ApiservicesService) {
    this.userform = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    });
  }
  submitform() {
    if (this.userform.valid) {
      if (
        this.userform.get('password')?.value ==
        this.userform.get('confirmPassword')?.value
      ) {
        this.formdata = {
          firstName: this.userform.get('firstName')?.value,
          lastName: this.userform.get('lastName')?.value,
          email: this.userform.get('email')?.value,
          password: this.userform.get('password')?.value,
          mobileNo: this.userform.get('mobile')?.value,
        };
        this.api.createUser(this.formdata).subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (error) => {
            console.log(error);
          },
        });
      } else {
        alert('password and confirm password are not same');
      }
    }
  }

  clear() {
    this.userform.reset();
  }

}
