import {HttpResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {Location} from '@angular/common';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService, private router: Router, private location:Location) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(tap((res: any) => {
      if (res instanceof HttpResponse && request.method == 'POST' && this.router.url.endsWith('/login')) {
        const welcomeMessage: string = 'Hello ' + res.body.username + '!';
        this.toastr.success(welcomeMessage, 'Success!');
        if (res.body._kmd.roles !== undefined) {
          localStorage.setItem('roleId', res.body._kmd.roles[0].roleId);
        } else {
          localStorage.setItem('roleId', Math.random().toString());
        }
        this.router.navigate(['/'])
      }
      if (res instanceof HttpResponse && request.method == 'POST' && this.router.url.endsWith('/signup')) {
        this.toastr.success("Registration!", 'Success!');
        this.router.navigate(['/auth/login']);
      }
      if (res instanceof HttpResponse && this.router.url.endsWith('/')) {
        this.toastr.success("GET from server!", 'Success!');
      }
      if (res instanceof HttpResponse && request.method == 'GET' && this.router.url.match('/details/.')) {
        let title = res.body.title;
        this.toastr.success(title + " details!", 'Success!');
      }
      if (res instanceof HttpResponse && request.method == 'POST' && this.router.url.endsWith('/create/new')) {
        this.router.navigate(['/']);
        this.toastr.success("New post created!", 'Success!');
      }
      if (res instanceof HttpResponse && request.method == 'DELETE' && this.router.url.match('/details/.')) {
        this.location.back();
        this.toastr.warning("Post deleted!", 'Warning!');
      }
      if (res instanceof HttpResponse && request.method == 'PUT' && this.router.url.match('/edit/.')) {
        this.location.back();
        this.toastr.warning("Post edited!", 'Warning!');
      }
      if (res instanceof HttpResponse && request.method == 'POST' && this.router.url.endsWith('/guest/home')) {
        localStorage.clear();
        this.toastr.warning("Logging out...", '');
      }
   if (res instanceof HttpResponse && request.method == 'POST' && this.router.url.match('/comments/.')) {
        this.toastr.success("Comment added!", 'Success!');
      }
      if (res instanceof HttpResponse && request.method == 'GET' && this.router.url.match('/comments/.')) {

        this.toastr.success("Comments Loaded!", 'Success!');
      }
      if (res instanceof HttpResponse && request.method == 'GET' && this.router.url.match('/users/info')) {

        this.toastr.success(res.body.username.substr(0,1).toUpperCase()+res.body.username.substr(1,res.body.username.length)+" information loaded!", 'Success!');
      }
      if (res instanceof HttpResponse && request.method == 'GET' && this.router.url.match('/users/list')) {

        this.toastr.success("User List Loaded!", 'Success!');
      }
      if (res instanceof HttpResponse && request.method == 'DELETE' && this.router.url.match('/users/list')) {

        this.toastr.warning("User deleted!", 'Warning!');
      }

    }));
  }

}



