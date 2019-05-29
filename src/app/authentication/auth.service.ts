import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignInModel} from "./models/signin.model";
import {SignUpModel} from "./models/signup.model";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {SigninResponseModel} from "./models/signin-response.model";
import {Data} from "../config/config";


@Injectable()
export class AuthService {

  private registerUrl: string = Data.baseUrl + 'user/' + Data.appKey + '/';
  private loginUrl: string = Data.baseUrl + 'user/' + Data.appKey + '/login';

  constructor(private http: HttpClient, private router: Router) {

  }

  register(body: SignUpModel) {
    body.username = body.username.toLowerCase();
    return this.http.post(this.registerUrl, body, {headers: Data.headers_basic});
  }

  loginObservable(body: SignInModel): Observable<SigninResponseModel> {
    body.username = body.username.toLowerCase();
    return this.http.post<SigninResponseModel>(this.loginUrl, body, {headers: Data.headers_basic});
  }

  logout() {
   return this.router.navigate(['/guest/home']).then(()=>{
     this.http.post(Data.baseUrl + "user/" + Data.appKey + "/_logout", {}, {
       headers: {
         'Authorization': 'Kinvey ' + localStorage.getItem('authToken')
       }
     }).subscribe();
    }).catch(()=>{

   });

  }

public isAuthenticated(): boolean {
    return localStorage.getItem('username') !== null;
  }
  public isAdmin(): boolean {
    return localStorage.getItem('roleId') === Data.roleId;
  }

  login(model: SignInModel) {
    this.loginObservable(model)
      .subscribe((res: SigninResponseModel) => {
        localStorage.setItem("username", res.username);
        localStorage.setItem("authToken", res._kmd.authtoken);
        localStorage.setItem("_id", res._id);
      });
  }
}
