import {HttpResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {AuthService} from "../authentication/auth.service";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService, private router: Router, private authService: AuthService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(tap((res: any) => {
      if (res instanceof HttpResponse && res.body.username  && this.router.url.endsWith('/login')) {
   //     this.saveToken(res.body);
        const welcomeMessage: string = 'Hello '+res.body.username+'!';
        this.toastr.success(welcomeMessage, 'Success!');
        this.router.navigate(['/'])
      }
      if (res instanceof HttpResponse && res.body.username && this.router.url.endsWith('/signup')) {
        this.toastr.success("Registration!", 'Success!');
        this.router.navigate(['/auth/login']);
      }
      if (res instanceof HttpResponse  && this.router.url.endsWith('/')) {
        this.toastr.success("GET from server!", 'Success!');
      }
      if (res instanceof HttpResponse  && this.router.url.match('/details/.')) {
    let title =  res.body.title;
        this.toastr.success(title+" details!", 'Success!');
      }
      if (res instanceof HttpResponse && this.router.url.match('/create/new')) {
        this.router.navigate(['/']);
        this.toastr.success("New post created!", 'Success!');
      }

    }));
  }

 /*
    private saveToken(data) {
    localStorage.setItem('username', data.username);
    localStorage.setItem('authToken', data._kmd.authtoken);
  }
 */

}



