import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  user: User = new User('', '', '', '', '', '');
  websites: Website[] = [];

  constructor(private webService: WebsiteService, private userService: UserService, private route: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.findUserById(this.sharedService.user.id).subscribe(
          (user: any) => {
              this.user = new User(user._id, user.username, user.password, user.firstName, user.lastName, user.email);
          }
      );
      this.webService.findWebsiteByUser(this.sharedService.user._id).subscribe(
          (websites: any[]) => {
              for(var i = 0; i < websites.length; i++) {
                  const website = websites[i];
                  const newWeb = new Website(website._id, website.name, website.developerId, website.description);
                  this.websites.push(newWeb);
              }
          }
      );
    });
  }
}
