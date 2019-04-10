import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') myRegisterForm: NgForm;
  user = {username: '', password: ''};
  v_password: string;
  errorFlag: boolean;
  errorMsg = 'Password mis-matching!';

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }

  register() {
    this.user.username = this.myRegisterForm.value.username;
    this.user.password = this.myRegisterForm.value.password;
    this.v_password = this.myRegisterForm.value.v_password;
    if ( this.v_password === this.user.password) {
      this.errorFlag = false;
      this.userService.register(this.user.username, this.user.password)
          .subscribe(
              (data: any) => {
                this.sharedService.user = data;
                console.log(data.name);
                this.router.navigate(['/profile']);
              },
              (error: any) => {
                this.errorMsg = error._body;
              }
          );

    } else {
      this.errorFlag = true;
    }
  }

  ngOnInit() {
  }
}
