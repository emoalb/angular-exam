import {HttpResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService, private router: Router) {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      return next.handle(request).pipe(tap((res: any) => {
        if (res instanceof HttpResponse && res.body._kmd.authtoken && this.router.url.endsWith('/login')) {
          this.saveToken(res.body);
          this.toastr.success(res.body.message, 'Success!');
        }
        if (res instanceof HttpResponse && res.body.username && this.router.url.endsWith('/signup')) {
          this.toastr.success("Successful registration!", 'Success!');
          this.router.navigate(['/auth/login']);
                  }
              }));
    }
    private saveToken(data) {
    localStorage.setItem('username',  data.username  );
    localStorage.setItem('authToken',data._kmd.authtoken);
    }
  }



