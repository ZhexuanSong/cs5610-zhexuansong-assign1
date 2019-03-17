import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

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

  constructor(private userService: UserService, private route: Router) { }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    this.userService.findUserByCredentials(this.username, this.password)
      .subscribe(
        (user: any) => {
          if (typeof user._id !== 'undefined') {
            console.log(user);
            this.route.navigate(['/user', user._id]);
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
    this.route.navigate(['/register']);
  }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMsg = 'Invalid username or password!';
  }
}
