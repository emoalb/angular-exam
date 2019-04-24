import {Component, OnInit} from '@angular/core';
import {UserModel} from "../models/user.model";
import {UsersService} from "../users.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: UserModel;
  constructor(private usersService: UsersService,private location: Location) {
   this.user  = new UserModel('','','',{authtoken:"",lmt:"",roles:{}})
  }

  ngOnInit() {
    this.user = null;
  this.usersService.getUser().subscribe(user=>
{
  this.user=user;

});

  }
  goBack(): void {
    this.location.back();
  }

}
