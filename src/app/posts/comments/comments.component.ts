import {Component, OnInit} from '@angular/core';
import {CommentModel} from "../models/comment.model";
import {PostService} from "../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../users/users.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comment: CommentModel;
  comments: CommentModel[];
  postId: string;

  constructor(private postService: PostService, private route: ActivatedRoute,private location: Location) {
    this.comment = new CommentModel('', '', '');
    this.comments = [];
  }
  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.postService.getAllComments().subscribe((res: CommentModel[]) => {
      res.forEach(n =>{if(n.postId===this.postId){
        this.comments.push(n)
      }})
    })
  }
  addComment() {
    this.comment.postId=this.postId;
    this.comment.userName=localStorage.getItem('username')
    this.comments.push(this.comment);
    this.postService.addComment(this.comment).subscribe()
    this.comment= new CommentModel('', '', '');
  }
  goBack(): void {
    this.location.back();
  }
}
