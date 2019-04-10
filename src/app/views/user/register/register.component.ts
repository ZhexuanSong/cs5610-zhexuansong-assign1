import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.services.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String;
  password: String;
  verifiedPassword: String;
  errorFlag: boolean;
  errorMsg: String;

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) {
  }

  register() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.verifiedPassword = this.loginForm.value.verifiedPassword;
    if (this.password !== this.verifiedPassword) {
      this.errorFlag = true;
    } else {
      const user = new User('', this.username, this.password, '', '', '');
      this.userService.register(this.username, this.password).subscribe((data: any) => {
          this.sharedService.user = data;
          this.router.navigate(['/user', data._id]);
        },
        (error: any) => {
          this.errorFlag = true;
          this.errorMsg = 'Username is in use';
        }
      );
    }
  }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMsg = 'Passwords not match!';
  }

}
