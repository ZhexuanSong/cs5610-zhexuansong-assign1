import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  userId: string;
  websites: Website[] = [];

  constructor(private userService: UserService, private websiteService: WebsiteService, private activateRoute: ActivatedRoute,
              private router: Router, private sharedService: SharedService) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.userId = this.sharedService.user._id;
      this.userService.findUserById(this.userId).subscribe((user) => {
        this.websites = user.websites;
      });
    });
  }
}
