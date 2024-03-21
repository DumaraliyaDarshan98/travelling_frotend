import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export enum APIEndpoint {
  USER_CREATE = 'http://localhost:3200/user/create',
  USER_DELETE = 'http://localhost:3200/user/deleteProfile',
  LOCATION_CREATE='http://localhost:3200/location/create',
}

@Injectable({
  providedIn: 'root',
})
export class ApiservicesService {
  constructor(private http: HttpClient) {}

  createUser(data: string) {
    return this.http.post(APIEndpoint.USER_CREATE, data);
  }

  userLogin(data: string) {
    return this.http.post('http://localhost:3200/auth/login', data);
  }

  getlogindetails() {
    return this.http.get('http://localhost:3200/user/list');
  }

  deleteuser(id: number) {
    return this.http.delete(APIEndpoint.USER_DELETE+`/${id}`);
  }

  getlocationdetails() {
    return this.http.get('http://localhost:3200/location/list');
  }

  getlocation(id: number) {
    return this.http.get(`http://localhost:3200/location/getLocation/${id}`);
  }

  deletelocation(id: number) {
    return this.http.delete(
      `http://localhost:3200/location/deleteLocation/${id}`
    );
  }

  updatelocation(id: number, data: FormData) {
    return this.http.put(
      `http://localhost:3200/location/updateLocation/${id}`,
      data
    );
  }

  createlocation(data: FormData) {
    return this.http.post(APIEndpoint.LOCATION_CREATE, data);
  }

  gettravelingdetails() {
    return this.http.get('http://localhost:3200/traveling/list');
  }

  gettraveling(id: number) {
    return this.http.get(
      `http://localhost:3200/traveling/getTraveling/${id}`
    );
  }

  updatetraveling(id: number, data: FormData) {
    return this.http.put(
      `http://localhost:3200/traveling/updateTraveling/${id}`,
      data
    );
  }

  deletetraveling(id: number) {
    return this.http.delete(
      `http://localhost:3200/traveling/deleteTraveling/${id}`
    );
  }

  createtraveling(data: FormData) {
    //console.log(data);
    return this.http.post('http://localhost:3200/traveling/create', data);
  }

  getimage() {
    return this.http.get('https://course-api.com/react-tours-project');
  }
}
