import {Component, OnInit} from '@angular/core';
import {PostModel} from "../../posts/models/post.model";
import {UsersService} from "../users.service";
import {UserModel} from "../models/user.model";
import {AuthService} from "../../authentication/auth.service";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: UserModel[];
  constructor(private userService: UsersService,private authService: AuthService) {
    this.users=[];
  }



  ngOnInit() {
    this.userService.getAllUsers().subscribe((res: UserModel[]) => {
res.forEach((n: UserModel)=>{
  if(n.username!=='admin'){
    this.users.push(n);
  }
});

    })
  }

  deleteUser(_id: string) {

  }
}
