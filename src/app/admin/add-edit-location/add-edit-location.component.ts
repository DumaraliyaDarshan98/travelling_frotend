import { Component, Inject } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-add-edit-location',
  templateUrl: './add-edit-location.component.html',
  styleUrls: ['./add-edit-location.component.scss'],
})
export class AddEditLocationComponent {
  locationForn: FormGroup;
  locationData: any;
  selectedFile!: File;
  image1: boolean = false;
  put: boolean = false;
  srcimage: string = '';
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddEditLocationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    private api: ApiservicesService
  ) {
    this.locationForn = this.fb.group({
      title: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      description: ['', Validators.required],
      image: [''],
    });
  }
  ngOnInit() {
    if (this.data !== null) {
      this.put = true;

      this.api.getlocation(this.data.id1).subscribe({
        next: (res) => {
          this.locationData = res;
          if (this.locationData.data.image != null) {
            //console.log(this.locationData);
            console.log(this.locationData.data.image);
            this.image1 = true;
            this.srcimage =
              'http://192.168.1.8:3200/uploads/' + this.locationData.data.image;
          }

          this.locationForn.setValue({
            title: this.locationData.data.title,
            city: this.locationData.data.city,
            state: this.locationData.data.state,
            description: this.locationData.data.description,
            image: '',
          });
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  onFileSelected(event: any): void {
    //alert(event.target.files[0]);
    this.selectedFile = <File>event.target.files[0];
    //alert(this.selectedFile);
  }
  submit() {
    console.log(this.locationForn.value);

    const formData = new FormData();
    formData.append('image', this.selectedFile);
    formData.append('title', this.locationForn.get('title')?.value);
    formData.append('city', this.locationForn.get('city')?.value);
    formData.append('state', this.locationForn.get('state')?.value);
    formData.append('description', this.locationForn.get('description')?.value);
    if (this.data !== null) {
      this.api.updatelocation(this.data.id1, formData).subscribe({
        next: (res) => {
          this.locationData = res;
          console.log(this.locationData.message);
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      this.api.createlocation(formData).subscribe(
        (response) => {
          console.log('asssssssssssssssssss', response);
        },
        (error) => {
          console.log('adsadasdasdasdasdasd', error);
        }
      );
    }
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}
