import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from 'src/app/user.service';
import {Router} from '@angular/router';
import {User} from 'src/app/model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  createUser() {
    let username = this.registerForm.value.username;
    let password = this.registerForm.value.password;
    let user = new User("", username, password, "", "");
    let userId = this.userService.createUser(user);
    this.router.navigate(['user', userId]);
  }
}
