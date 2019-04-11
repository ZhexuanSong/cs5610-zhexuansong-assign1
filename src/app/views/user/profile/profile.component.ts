import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

    userId: String;
    user: any;
    username: String;

    constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

    updateUser() {
            this.sharedService.user = this.user;
            console.log(this.user);
            return this.userService.updateUser(this.user).subscribe(
                data => console.log('updated' + data)
            );
    }

    deleteUser() {
        return this.userService.deleteUserById(this.user._id).subscribe((user: any) => {
            this.sharedService.user = '';
            console.log('user deleted' + user);
        });
    }

    ngOnInit() {
        this.user = this.sharedService.user;
        console.log('user from sharedService: ' + this.user._id);
        this.userService.findUserById(this.user._id).subscribe(
            (user: any) => {
                this.user = user;
                console.log('user from db: ' + this.user);
            });
    }

    logout() {
        this.userService.logout()
            .subscribe();
    }
}
