import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  user: any;
  v_password: String;

  errorFlag: boolean;
  errorMsg: String;
  passwordFlag; boolean;
  passwordMsg: String;
  errorAlert: String;
  passwordAlert: String;

  constructor(private userService: UserService,
              private router: Router,
              private sharedService: SharedService) { }

  register() {
    this.user.username = this.registerForm.value.username;
    this.user.password = this.registerForm.value.password;
    this.v_password = this.registerForm.value.v_password;

    this.errorFlag = false;
    this.passwordFlag = false;

    if (this.v_password !== this.user.password) {
      this.passwordFlag = true;
      this.passwordMsg = 'Password mis-matching!';
      return;
    }
    this.userService.findUserByUsername(this.user.username).subscribe(
      (data: any) => {
        if (data) {
          this.errorFlag = true;
          this.errorMsg = 'This username is in use. Please enter a different one.';
        } else {
          return this.userService.register(this.user.username, this.user.password)
            .subscribe(
              (newUser: any) => {
                this.router.navigate(['/profile']);
              }, (error: any) => {
                this.errorMsg = error._body;
              }
            );
        }
      });
  }

  cancel() {
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.errorAlert = '* Please enter username';
    this.passwordAlert = '* Please enter password';
    this.user = UserService.getNewUser();
  }

}
