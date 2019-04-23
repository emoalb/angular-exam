import {Component, OnInit, Output} from '@angular/core';
import {PostModel} from "../models/post.model";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
 post: PostModel;
  constructor() {
    this.post = new PostModel("","","","",localStorage.getItem('username'))
  }

  ngOnInit() {
  }

}
