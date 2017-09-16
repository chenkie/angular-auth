import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError: String;
  fetching: boolean = false;

  constructor(public authService: AuthService) {}

  ngOnInit() {}

  onSubmit(credentials): void {
    this.fetching = true;
    this.authService.login(credentials).subscribe(
      data => {
        this.authService.setSession(data.token);
        this.fetching = false;
      },
      err => {
        this.loginError = err.error.message;
        this.fetching = false;
      }
    );
  }
}
