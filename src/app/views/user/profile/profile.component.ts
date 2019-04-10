import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title: string;
  user: any;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router, private sharedService: SharedService) {
    this.title = 'profile';
    this.user = new User('', '', '', '');
  }


  getUser() {
    this.user = this.sharedService.user;
  }
  updateUser() {
    if (!this.user.username || !this.user.password || !this.user.firstName || !this.user.lastName) {
      alert('Please enter your new profile information');
    } else {
      this.userService.updateUser(this.user._id, this.user).subscribe((data) => {
        this.user = data;
        this.sharedService.user = data;
        this.router.navigate(['/user/' + this.user._id]);
        alert('update successfully');
      });
    }
  }

  ngOnInit() {
    this.getUser();
  }

  logout() {
    this.userService.logout().subscribe((data: any) => {
      this.router.navigate(['/login']);
    });
  }

}
