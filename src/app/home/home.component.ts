import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
title:string = 'Angular exam project';
  constructor() { }

  ngOnInit() {
   this.username=localStorage.getItem('username');
  }

}
