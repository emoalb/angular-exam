import {Component, Input, OnInit, Output} from '@angular/core';
import {PostModel} from "../models/post.model";
import {PostService} from "../services/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
 @Input() post: PostModel;
 @Input() title_head: string='Create new post:';
 @Input() mode: string = 'new';
  constructor(private  postService: PostService,private router:Router) {

    this.post = new PostModel((Math.random()).toString(),"","","",localStorage.getItem('username'))
  }

  ngOnInit() {
  }

  createNewPost() {
if(this.mode=='new') {
  this.postService.createNewPost(this.post).subscribe();
}if(this.mode=='edit'){
  this.postService.updatePost(this.post).subscribe();
    }
  }

  isCapital(): boolean {

  return  this.post.title.charAt(0)===this.post.title.charAt(0).toUpperCase();
  }
}
