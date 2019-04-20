import { Component, OnInit } from '@angular/core';
import {SignInModel} from "../models/signin.model";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
model: SignInModel;
  constructor() {
    this.model=new SignInModel("","");
  }

  ngOnInit() {
  }

}
