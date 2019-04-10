import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.services.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../../../app.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  userId: String;
  user: {};
  username: String;
  email: String;
  firstName: String;
  lastName: String;

  constructor(private userService: UserService,
              private sharedService: SharedService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.getUser();
    /*this.activatedRoute.params.subscribe(params => {
      return this.userService.findUserById(params['uid']).subscribe(
        (returnUser: User) => {
          this.userId = params['uid'];
          this.user = returnUser;
          this.username = this.user.username;
          this.email = this.user.email;
          this.firstName = this.user.firstName;
          this.lastName = this.user.lastName;
          this.email = this.user.email;
        }
      );
    });
*/
  }

  getUser() {
    this.user = this.sharedService.user;
    this.username = this.user['username'];
    this.firstName = this.user['firstName'];
    this.lastName = this.user['lastName'];
    this.email = this.user['email'];
    this.userId = this.user['_id'];
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  update() {
    this.user['username'] = this.loginForm.value.username;
    this.user['firstName'] = this.loginForm.value.firstName;
    this.user['lastName'] = this.loginForm.value.lastName;
    this.user['email'] = this.loginForm.value.email;
    this.userService.updateUser(this.userId, this.user).subscribe((data: any) => {
      this.router.navigate(['/user', this.userId]);
    });
  }

  delete() {
    this.userService.deleteUser(this.userId).subscribe((returnUser: User) => {
      this.router.navigate(['/login']);
    });
  }
}
