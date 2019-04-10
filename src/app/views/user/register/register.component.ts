import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title: string;
  user: User;
  errorFlag: boolean;
  errorMsg = '';
  vpassword = '';

  constructor(private router: Router, private userService: UserService) {
    this.title = 'Register';
    this.errorFlag = false;
    this.user = new User( '', '', undefined, undefined);
  }

  register() {
    this.errorFlag = this.user.username === '' || this.user.password === '' || this.vpassword === '';
    if (this.errorFlag) {
      this.errorMsg = 'Please enter your register information.';
    } else {
      if (this.vpassword === this.user.password) {
        this.errorFlag = false;
        this.userService.register(this.user).subscribe((data: any) => {
          if (data.message === 'User already exists') {
            alert('User already exists. Please use another username');
          } else {
            this.router.navigate(['profile']);
          }
        });
      } else {
        this.errorMsg = 'Sorry, password mist-matching.';
        this.errorFlag = true;
      }
    }
  }

  ngOnInit() {
  }

}
