import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.services.client';
import {SharedService} from '../../../services/shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../app.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg: String;

  constructor(private userService: UserService, private sharedService: SharedService, private router: Router) {
  }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.userService.login(this.username, this.password)
      .subscribe((data: any) => {
          this.sharedService.user = data;
          this.router.navigate(['/user', data._id]);
        },
        (error: any) => {
          this.errorFlag = true;
        });
  }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMsg = 'Wrong username or password!';
  }

}
