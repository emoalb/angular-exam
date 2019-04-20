import {Component, OnInit} from '@angular/core';

import {SignUpModel} from "../models/signup.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: SignUpModel;

  constructor() {
    this.model = new SignUpModel("", "");
  }

  ngOnInit() {
  }

}
