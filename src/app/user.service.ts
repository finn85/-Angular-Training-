import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  checkUserLoginAndPassword(formValues: object): any {
    return this.http.post(`/api/users/login`, formValues)
  }

  getPassword = (formValues: object) => {
    return this.http.post('/api/users/password', formValues)
  };

  getUserById = (id: string) => {
    return this.http.get(`/api/users/${id}`)
  };

  changeInfo = (id: string, formValues: object) => {
    return this.http.put(`/api/users/${id}`, formValues)
  }
}
