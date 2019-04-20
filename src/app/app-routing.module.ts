import { NgModule } from '@angular/core';

import {RouterModule,Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {SigninComponent} from "./authentication/signin/signin.component";
const routes: Routes = [
  { path: '', pathMatch:'full', component: HomeComponent },
  {path:'auth/login', component: SigninComponent}
];
@NgModule({
  declarations: [],
  imports:
    [ RouterModule.forRoot(routes) ],
  exports:
  [RouterModule]
})
export class AppRoutingModule { }
