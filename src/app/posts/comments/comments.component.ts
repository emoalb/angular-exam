import {Component, OnInit} from '@angular/core';
import {CommentModel} from "../models/comment.model";
import {PostService} from "../services/post.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {AuthService} from "../../authentication/auth.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comment: CommentModel;
  comments: CommentModel[];
  postId: string;

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private location: Location,
              private authService: AuthService) {
    this.comment = new CommentModel(Math.random().toString(),'', '', '');
    this.comments = [];
  }
  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.getAllComments()
  }
  addComment() {
    this.comment.postId=this.postId;
    this.comment.userName=localStorage.getItem('username');
    this.comments.push(this.comment);
    this.postService.addComment(this.comment).subscribe();
    this.comment= new CommentModel(Math.random().toString(),'', '', '');
  }
  goBack(): void {
    this.location.back();
  }
getAllComments(){
  this.comments=[];
  this.postService.getAllComments().subscribe((res: CommentModel[]) => {
    res.forEach(n =>{if(n.postId===this.postId){
      this.comments.push(n);
    }})
  })
}
  deleteComment(_id:string) {
    this.postService.deleteComment(_id).subscribe(res=>this.getAllComments());
  }
}
