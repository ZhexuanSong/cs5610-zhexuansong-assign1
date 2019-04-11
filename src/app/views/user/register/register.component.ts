import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {username: '', password: ''};
  v_password: string;
  errorFlag: boolean;
  errorMsg = 'Password mis-matching!';

  constructor(private userService: UserService, private router: Router) { }

  register() {
    if ( this.v_password === this.user.password) {
      this.errorFlag = false;
      this.userService.findUserByCredential(this.user.username, this.user.password)
          .subscribe((user: any) => {
            if (!user) {
              this.userService.createUser(this.user).subscribe((data: any) => {
                this.user = data;
                this.router.navigate(['user/', data._id]);
              });
            }
          });
    } else {
      this.errorFlag = true;
    }
  }

  ngOnInit() {
  }
}
