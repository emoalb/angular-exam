import { NgModule } from '@angular/core';

import {RouterModule,Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {SigninComponent} from "./authentication/signin/signin.component";
import {SignupComponent} from "./authentication/signup/signup.component";
import {AuthGuard} from "./authentication/guards/auth.guard";
import {GuestHomeComponent} from "./guest-home/guest-home.component";
import {DetailsPostComponent} from "./posts/details-post/details-post.component";
const routes: Routes = [
  {path: '', component: HomeComponent ,canActivate: [AuthGuard]},
  {path:'auth/login', component: SigninComponent},
  {path:'auth/signup',component:SignupComponent},
  {path:'guest/home',component:GuestHomeComponent},
  {path:'details/:id',component:DetailsPostComponent,canActivate: [AuthGuard]}
];
@NgModule({
  declarations: [],
  imports:
    [ RouterModule.forRoot(routes) ],
  exports:
  [RouterModule]
})
export class AppRoutingModule { }
