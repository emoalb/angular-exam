import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../services/post.service";
import {PostModel} from "../models/post.model";
import {Location} from '@angular/common';
import {AuthService} from "../../authentication/auth.service";

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.css']
})
export class DetailsPostComponent implements OnInit {


  constructor(private route: ActivatedRoute
            , private postService: PostService
            , private location: Location, private router: Router
            , private authService: AuthService) {
  }

  post: PostModel;

  ngOnInit() {
    const _id: string = this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(_id).subscribe((post: PostModel) => {
      this.post = post;
    })
  }

  goBack(): void {
    this.location.back();
  }

  isCreator(): boolean {
    return this.post.username === localStorage.getItem('username');
  }

  deletePost() {
    this.postService.deletePost(this.post._id).subscribe();
  }

  editPost() {
    this.router.navigate(['edit/' + this.post._id]);
  }
}
