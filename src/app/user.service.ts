import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

// import {User} from "./Interfaces/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  checkUserLoginAndPassword(formValues: object): any {
    return this.http.post(`/api/users/login`, formValues)
  }

  getPassword = () => {
    console.log('test')
  };

  getUserById = (id: string) =>{
    if (id) {
      return this.http.get(`/api/users/${id}`)/*.pipe(map(data=> ))*/
    } else {
      return new Observable();//todo wrong line
    }

  }
}
