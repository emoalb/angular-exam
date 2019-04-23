import {Component, OnInit} from '@angular/core';
import {PostModel} from "../models/post.model";
import {PostService} from "../services/post.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postService: PostService) {
  }

  post: PostModel;
  title: string = 'Edit post:';
  mode: string = 'edit';

  ngOnInit() {
    this.post = new PostModel("", "", "", "", "");
    const _id: string = this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(_id).subscribe(post => this.post = post)
  }

}
