import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  userName: string;
  password: string;
  matched = true;

  ngOnInit() {
  }
  constructor(private router: Router, private userService: UserService) {};
  login() {
    const name = this.loginForm.value.userName;
    const password = this.loginForm.value.password;
    const user = this.userService.findUserByCredentials(name, password);
    if(user != null) {
      this.router.navigate(['/user', user.id]);
    }
    else{
      this.matched = false;
    }
  }
  register() {
    this.router.navigate(['/login']);
  }

}
