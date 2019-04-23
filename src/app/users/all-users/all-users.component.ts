import { Component, OnInit } from '@angular/core';
import {PostModel} from "../../posts/models/post.model";
import {UsersService} from "../users.service";
import {UserModel} from "../models/user";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private userService: UsersService){ }
users:UserModel[];
  ngOnInit() {
    this.userService.getAllUsers().subscribe((res: UserModel[]) => {
      this.users = res;
      console.log(this.users)
    })
  }

}
