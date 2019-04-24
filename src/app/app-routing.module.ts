import { NgModule } from '@angular/core';

import {RouterModule,Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {SigninComponent} from "./authentication/signin/signin.component";
import {SignupComponent} from "./authentication/signup/signup.component";
import {AuthGuard} from "./authentication/guards/auth.guard";
import {GuestHomeComponent} from "./guest-home/guest-home.component";
import {DetailsPostComponent} from "./posts/details-post/details-post.component";
import {NewPostComponent} from "./posts/new-post/new-post.component";
import {AllUsersComponent} from "./users/all-users/all-users.component";
import {AdminGuard} from "./authentication/guards/admin.guard";
import {EditPostComponent} from "./posts/edit-post/edit-post.component";
import {CommentsComponent} from "./posts/comments/comments.component";
import {UserInfoComponent} from "./users/user-info/user-info.component";
const routes: Routes = [
  {path: '', component: HomeComponent ,canActivate: [AuthGuard]},
  {path:'auth/login', component: SigninComponent},
  {path:'auth/signup',component:SignupComponent},
  {path:'guest/home',component:GuestHomeComponent},
  {path:'details/:id',component:DetailsPostComponent,canActivate: [AuthGuard]},
  {path:'create/new',component:NewPostComponent ,canActivate: [AuthGuard]},
  {path:'users/list',component:AllUsersComponent,canActivate: [AdminGuard]},
  {path:'edit/:id',component:EditPostComponent,canActivate:[AuthGuard]},
  {path:'comments/:id',component:CommentsComponent,canActivate:[AuthGuard]},
  {path:'users/info',component:UserInfoComponent,canActivate:[AuthGuard]},
];
@NgModule({
  declarations: [],
  imports:
    [ RouterModule.forRoot(routes) ],
  exports:
  [RouterModule]
})
export class AppRoutingModule { }
