import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./interceptors/jwt.interceptor";
import {ErrorInterceptor} from "./interceptors/error.interceptor";
import {GuestHomeComponent} from './guest-home/guest-home.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faGlobe, fas} from "@fortawesome/free-solid-svg-icons";
import {AllUsersComponent} from './users/all-users/all-users.component';
import {UserInfoComponent} from './users/user-info/user-info.component';
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {AuthenticationModule} from "./authentication/authentication.module";
import {PostsModule} from "./posts/posts.module";


library.add(faGlobe);
library.add(faUser);
library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserInfoComponent,
    GuestHomeComponent,
    AllUsersComponent,

  ],
  imports: [
    BrowserModule,
    PostsModule,
    AuthenticationModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
