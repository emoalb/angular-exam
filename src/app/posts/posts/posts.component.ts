import {Component, OnInit} from '@angular/core';
import {PostModel} from "../models/post.model";
import {PostService} from "../services/post.service";
import {animate, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('FadeAnimation', [

      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(6000)
      ]),
    ])
  ]
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) {
  }

posts: PostModel[];

  async ngOnInit() {
   this.postService.getAllPosts().subscribe((res: PostModel[]) => {
         this.posts=res;
     })


  }

}


