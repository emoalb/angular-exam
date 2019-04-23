import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PostModel} from "../models/post.model";
import {PostService} from "../services/post.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations: [
    trigger('FadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(6000)
      ]),
    ])
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) {
  }

  posts: PostModel[];

  async ngOnInit() {
    this.postService.getAllPosts().subscribe((res: PostModel[]) => {
      this.posts = res;
    })


  }

}


