import {Component, OnInit} from '@angular/core';
import {AuthService} from "../authentication/auth.service";
import {Observable, Observer} from "rxjs";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  time: Observable<string>;
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.time = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => observer.next(new Date(Date.now()).toLocaleString()), 1000);
    });
  }
getUsername(): string{
    return localStorage.getItem('username');
}

  logout(): void {
    this.authService
      .logout();
  }

}
