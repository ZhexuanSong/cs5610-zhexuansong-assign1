import { Component, OnInit, ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  baseUrl = environment.baseUrl;

  username: String; // see usage as two-way data binding
  password: String; // see usage as two-way data binding

  errorFlag: boolean;
  errorMsg: String;

  constructor(private userService: UserService,
              private router: Router,
              private sharedService: SharedService) {}

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    console.log('login username: ', this.username);

    this.userService.login(this.username, this.password)
      .subscribe(
        (user: any) => {
          this.errorFlag = false;
          this.sharedService.user = user;
          this.router.navigate(['/profile']);
        }, (error: any) => {
          this.errorFlag = true;
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
