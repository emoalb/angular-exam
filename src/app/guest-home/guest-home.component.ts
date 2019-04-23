import {Component, OnInit} from '@angular/core';
import {animate, keyframes, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-guest-home',
  templateUrl: './guest-home.component.html',
  styleUrls: ['./guest-home.component.css'],
  animations: [
    trigger('RotatingAnimation', [
      transition(':enter', animate('3000ms', keyframes([
          style({transform: ' rotateY(0)', offset: 0}),
          style({transform: 'rotateY(90deg)', offset: 0.25}),
          style({transform: 'rotateY(180deg)', offset: 0.5}),
          style({transform: 'rotateY(270deg)', offset: 0.75}),
          style({transform: 'rotateY(360deg)', offset: 1})
        ])
      ))
    ])]
})
export class GuestHomeComponent implements OnInit {



  constructor() {
  }

  ngOnInit() {
  }

}
