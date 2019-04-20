import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignInModel} from "./models/signin.model";
import {SignUpModel} from "./models/signup.model";



@Injectable()
export class AuthService {
  private baseUrl: string = 'https://baas.kinvey.com/';
  private appKey: string = 'kid_S1wP8tRfX';
  private headers ;
  private registerUrl: string = this.baseUrl + 'user/' + this.appKey + '/';
  private loginUrl: string = this.baseUrl + 'user/' + this.appKey + '/login';

  constructor(private http: HttpClient) {
    this.headers = { 'Content-Type': 'application/json',
      'Authorization': "Basic " + btoa('kid_S1wP8tRfX:7166d55c549a41f390b49f1066ca40da')
    }

    }



  register(body: SignUpModel) {
    return this.http.post(this.registerUrl, body,{headers : this.headers});
  }

  login(body: SignInModel) {
    return this.http.post(this.loginUrl, body,{headers : this.headers});
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('username') !== null;
  }
}
