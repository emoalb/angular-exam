import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../services/post.service";
import {PostModel} from "../models/post.model";
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.css']
})
export class DetailsPostComponent implements OnInit {

  constructor(private route: ActivatedRoute
              , private postService: PostService
              , private location: Location) {
  }

  post: PostModel;

  ngOnInit() {
    const _id: string = this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(_id).subscribe((post: PostModel)=>{
      this.post=post;
    })
  }
  goBack(): void {
    this.location.back();
  }

}
