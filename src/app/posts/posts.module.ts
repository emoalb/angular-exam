import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsComponent} from "./posts/posts.component";
import {DetailsPostComponent} from "./details-post/details-post.component";
import {NewPostComponent} from "./new-post/new-post.component";
import {PostComponent} from "./post/post.component";

import {PostService} from "./services/post.service";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HomeComponent} from "../home/home.component";
import {EditPostComponent} from "./edit-post/edit-post.component";
import {CommentsComponent} from "./comments/comments.component";

@NgModule({
  declarations: [
    PostsComponent,
    DetailsPostComponent,
    NewPostComponent,
    PostComponent,
    EditPostComponent,
    HomeComponent,
    CommentsComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers:[
    PostService
  ]

})
export class PostsModule { }
