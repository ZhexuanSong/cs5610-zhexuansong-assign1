import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('registerForm') registerForm: NgForm;
  unMatched = false;
  errorMessg = 'password unmatched';
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register( ) {
    const userName = this.registerForm.value.userName;
    const password = this.registerForm.value.password;
    const verify = this.registerForm.value.verifiedPassword;
    const firstName = this.registerForm.value.firstName;
    const lastName = this.registerForm.value.lastName;
    if (password !== verify) {
      this.unMatched = true;
    } else {
      const user = this.userService.createUser(userName, password, firstName, lastName);
      this.router.navigate(['/user', user.id]);
    }
  }
}
