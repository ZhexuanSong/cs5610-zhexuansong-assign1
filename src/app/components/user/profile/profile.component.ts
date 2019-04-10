import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  user: any;
  username: String;
  errorFlag: boolean;
  errorMsg: String;
  updateFlag: boolean;
  updateMsg: String;
  alert: String;

  constructor(private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  updateUser() {
    this.errorFlag = false;
    if (this.username !== this.user.username) {
      if (this.username === '') {
        this.errorFlag = true;
        this.errorMsg = 'Please enter username!';
        return;
      }
      this.userService.findUserByUsername(this.username).subscribe(
        (user: any) => {
          if (user) {
            this.errorFlag = true;
            this.errorMsg = 'The username is in use. Please enter a different name.';
          } else {
            this.user.username = this.username;
            this.update();
          }
        },
        (error: any) => console.log(error)
      );
    } else {
      this.update();
    }
  }

  update() {
    this.userService.updateUser(this.user._id, this.user).subscribe(
      (response: any) => {
        this.updateFlag = true;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => {
          this.sharedService.user = '';
          this.router.navigate(['/login']);
        }
      );
  }
  delete() {
    this.userService.deleteUser(this.user._id).subscribe(
      (response: any) => {
        console.log('delete user: ' + this.user._id);
        this.router.navigate(['/login']);
      },
      (error: any) => console.log(error)
    );
  }

   ngOnInit() {
     this.getUser();
     this.updateFlag = false;
     this.errorFlag = false;
     this.updateMsg = 'Profile updated!';
     this.alert = '* Please enter username';
  }

  getUser() {
    this.user = this.sharedService.user;
    this.username = this.user.username;
  }
}
