import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

    userId: String;
    user: any;
    username: String;

    constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

    updateUser() {
        this.activatedRoute.params.subscribe(params => {
            return this.userService.updateUser(this.user);
        });
    }

    deleteUser() {
        return this.userService.deleteUserById(this.userId).subscribe((user: any) => {
            console.log('user deleted' + user);
        });
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: any) => {
                this.userId = params['uid'];
            }
        );
        this.userService.findUserById(this.userId).subscribe(
            (user: any) => {
                this.user = user;
            });
    }
}
