import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  user: User;
  v_password: String;

  userErrorFlag: boolean;
  userErrorMsg: String;
  pwErrorFlag: boolean;
  pwErrorMsg: String;

  constructor(private userService: UserService, private router: Router) { }

  register() {
    this.user.username = this.registerForm.value.username;
    this.user.password = this.registerForm.value.password;
    this.v_password = this.registerForm.value.v_password;

    this.userErrorFlag = false;
    this.pwErrorFlag = false;

    this.userService.findUserByUsername(this.user.username).subscribe(
      (user: User) => {
        if (typeof user._id !== 'undefined') {
          this.userErrorFlag = true;
        } else if (this.v_password !== this.user.password) {
          this.pwErrorFlag = true;
        } else {
          return this.userService.createUser(this.user).subscribe(
            (newUser: User) => {
              this.router.navigate(['/user', newUser._id]);
            }
          );
        }
      });
  }

  cancel() {
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.userErrorMsg = 'The username already exists! Please use a different name.';
    this.pwErrorMsg = 'Password mis-matching!';

    this.user = UserService.getNewUser();
  }

}
