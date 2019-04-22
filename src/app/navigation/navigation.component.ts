import {Component, OnInit} from '@angular/core';
import {AuthService} from "../authentication/auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  username: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
this.authService.getUsername().subscribe(username=>this.username=username);

  }

  logout(): void {
    this.authService
      .logout();
  }

}
