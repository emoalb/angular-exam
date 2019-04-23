import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../models/post.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input() post: PostModel;
  constructor(private  router:Router) { }
router_=this.router
  ngOnInit() {

  }

}

