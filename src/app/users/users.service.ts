import {Injectable} from '@angular/core';

import {Data} from "../config/config";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserModel} from "./models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private router: Router) {
  }

  getAllUsers() {
    return this.http.get<UserModel[]>(Data.baseUrl + 'user/' + Data.appKey + '/',
      {
        headers: {
          'Authorization': 'Kinvey ' + localStorage.getItem("authToken")
        }
      });
  }

  getUser() {
    return this.http.get<UserModel>(Data.baseUrl + 'user/' + Data.appKey + '/' + localStorage.getItem('_id'),
      {
        headers: {
          'Authorization': 'Kinvey ' + localStorage.getItem("authToken")
        }
      });
  }

  deleteUser(_id: string) {
    return this.http.delete(Data.baseUrl + 'user/' + Data.appKey + '/' + _id + '/?hard=true', {headers: {'Authorization': 'Kinvey ' + localStorage.getItem('authToken')}})
  }

}
