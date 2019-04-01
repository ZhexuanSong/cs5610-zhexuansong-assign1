import { Component, OnInit, ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String; // see usage as two-way data binding
  password: String; // see usage as two-way data binding

  errorFlag: boolean;
  errorMsg: String;

  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    this.userService.findUserByCredentials(this.username, this.password)
      .subscribe(
        (user: any) => {
          if (user != null) {
            console.log(user);
            this.router.navigate(['/user', user._id]);
          } else {
            this.errorFlag = true;
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  register() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMsg = 'Invalid username or password!';
  }

}
