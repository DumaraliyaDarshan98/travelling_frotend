import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-add-edit-traveling',
  templateUrl: './add-edit-traveling.component.html',
  styleUrls: ['./add-edit-traveling.component.scss'],
})
export class AddEditTravelingComponent {
  travelform: FormGroup;
  traveldata: any;
  selectedFile!: File;
  image: boolean = false;
  put: boolean = false;
  srcimage: string = '';
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddEditTravelingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    private api: ApiservicesService
  ) {
    this.travelform = this.fb.group({
      title: ['', Validators.required],
      totalDays: ['', Validators.required],
      pricePerDay: ['', Validators.required],
      description: ['', Validators.required],
      image: [''],
    });
  }

  ngOnInit() {
    if (this.data !== null) {
      this.put = true;
      this.api.gettraveling(this.data.id1).subscribe({
        next: (res) => {
          this.traveldata = res;
          this.travelform.setValue({
            title: this.traveldata.data.title,
            totalDays: this.traveldata.data.totalDays,
            pricePerDay: this.traveldata.data.pricePerDay,
            description: this.traveldata.data.description,
            image: '',
          });
          if (this.traveldata.data.image != null) {
            //console.log(this.locationData);
            console.log(this.traveldata.data.image);
            this.image = true;
            this.srcimage =
              'http://192.168.1.8:3200/uploads/' + this.traveldata.data.image;
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
  onFileSelected(event: any): void {
    this.selectedFile = <File>event?.target?.files[0];
    //alert(this.selectedFile);
  }
  submit() {
    const formData = new FormData();
    formData.append('image', this.selectedFile);
    formData.append('title', this.travelform.get('title')?.value);
    formData.append('totalDays', this.travelform.get('totalDays')?.value);
    formData.append('pricePerDay', this.travelform.get('pricePerDay')?.value);
    formData.append('description', this.travelform.get('description')?.value);
    if (this.data !== null) {
      this.api.updatetraveling(this.data.id1, formData).subscribe({
        next: (res) => {
          this.traveldata = res;
          console.log(this.traveldata.message);
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      this.api.createtraveling(formData).subscribe(
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
