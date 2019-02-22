import { Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f')
  loginForm: NgForm
  errorFlag: boolean
  errorMsg: string
  
  constructor(private router: Router, private userService: UserService) { }

  login() {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;

    let user = this.userService.findUserByCredentials(username, password);
    if(user){
      this.router.navigate(['/user', user._id]);
    } else {
      this.errorFlag = true;
      this.errorMsg = "Login Failed.";
    }


  }
  ngOnInit() {
  }

}
