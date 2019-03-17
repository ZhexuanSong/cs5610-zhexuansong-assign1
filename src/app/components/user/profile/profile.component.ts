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

  constructor(private userService: UserService, private router: ActivatedRoute, private outRouter: Router) {
    this.user = new User('', '', '', '', '');
  }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('uid');
    this.userService.findUserById(id)
      .subscribe(
        user => this.user = user);

  }
  saveAndDisplayWebsites() {
    const username = this.profileForm.value.username;
    const firstname = this.profileForm.value.firstname;
    const lastname = this.profileForm.value.lastname;
    const newUser = new User(this.user._id, username, this.user.password, firstname, lastname);
    this.userService.updateUser(this.user._id, newUser)
      .subscribe(
        () => this.outRouter.navigate(['/user', this.user._id, 'website']));
  }



}

