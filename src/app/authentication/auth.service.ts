import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {SignInModel} from "./models/signin.model";
import {SignUpModel} from "./models/signup.model";
import {Router} from "@angular/router";
import {Observable, of} from "rxjs";
import {SigninResponseModel} from "./models/signin-response.model";



@Injectable()
export class AuthService {

  private baseUrl: string = 'https://baas.kinvey.com/';
  private appKey: string = 'kid_S1wP8tRfX';
  private readonly headers;
  private registerUrl: string = this.baseUrl + 'user/' + this.appKey + '/';
  private loginUrl: string = this.baseUrl + 'user/' + this.appKey + '/login';

  constructor(private http: HttpClient, private router: Router  ) {
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': "Basic " + btoa('kid_S1wP8tRfX:7166d55c549a41f390b49f1066ca40da')
    }
  }

  register(body: SignUpModel) {
    return this.http.post(this.registerUrl, body, {headers: this.headers});
  }

  loginObservable(body: SignInModel):Observable<SigninResponseModel> {
    return this.http.post<SigninResponseModel>(this.loginUrl, body, {headers: this.headers});
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/guest/home']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('username') !== null;
  }
login(model: SignInModel) {
  this.loginObservable(model)
    .subscribe((res: SigninResponseModel) => {
      localStorage.setItem("username", res.username);
      localStorage.setItem("authToken", res._kmd.authtoken);

    });
}
}
