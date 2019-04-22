import {Component, OnInit} from '@angular/core';
import {PostModel} from "../models/post.model";
import {PostService} from "../services/post.service";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) {
  }

  private posts: PostModel[];

  async ngOnInit() {
   this.postService.getAllPosts().subscribe((res:PostModel[]) => {
this.posts=res
     })


  }

}


