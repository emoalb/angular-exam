import { Injectable } from '@angular/core';

import {Data} from "../config/config";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserModel} from "./models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private router: Router) { }
  private headers_kinvey = {
    'Authorization': 'Kinvey ' + localStorage.getItem("authToken")
  };
  getAllUsers() {
    return this.http.get<UserModel[]>(Data.baseUrl + 'user/' + Data.appKey + '/',
      {headers:this.headers_kinvey});
  }
}
