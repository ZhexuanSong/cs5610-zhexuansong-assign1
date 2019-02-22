import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from 'src/app/user.service';
import {User} from 'src/app/model/User';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('f') profileForm: NgForm;
  user: User;
  
  constructor(private userService: UserService, private router: ActivatedRoute, private outRouter: Router) { }

  ngOnInit() {
    this.router.params.subscribe(
      (params: any) => {
        this.user = this.userService.findUserById(params['uid'])});
  }
  saveAndDisplayWebsites() {
    this.saveUser();
    this.displayWebsites()
  }
  saveUser() {
    let username = this.profileForm.value.username;
    let firstname = this.profileForm.value.firstname;
    let lastname = this.profileForm.value.lastname;
    let newUser = new User(this.user._id, username, this.user.password, firstname, lastname);
    this.userService.updateUser(this.user._id, newUser);
  }
  displayWebsites() {
    if (this.user) {
      let userId = this.user._id;

      this.outRouter.navigate(['/user', userId, 'website']);
    }
    
  }


}

