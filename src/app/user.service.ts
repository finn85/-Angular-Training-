import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";

// import {User} from "./Interfaces/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  checkUserLoginAndPassword(formValues: object): any {
    return this.http.post(`http://localhost:3000/login`, formValues)
  }

  getUserById(id: string){
    if (id) {
      return this.http.get(`http://localhost:3000/users/${id}`)/*.pipe(map(data=> ))*/
    } else {
      return new Observable();//todo wrong line
    }

  }
}
