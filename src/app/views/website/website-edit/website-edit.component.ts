import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model.client';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  user: User = new User('', '', '', '', '', '');
  websites: Website[] = [];
  currWebsite: Website = new Website('', '', '', '');
  errorFlag: boolean;
  errorMsg = '';

  constructor(private webService: WebsiteService, private userService: UserService,
              private route: ActivatedRoute, private router: Router, private sharedService: SharedService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.findUserById(this.sharedService.user._id).subscribe(
          (user: any) => {
              this.user = new User(user._id, user.username, user.password, user.firstName, user.lastName, user.email);
          }
      );
      this.webService.findWebsiteByUser(this.sharedService.user._id).subscribe(
          (websites: any[]) => {
              var website;
              for(var i = 0; i < websites.length; i++) {
                  website = websites[i];
                  var newWeb = new Website(website._id, website.name, website.developerId, website.description);
                  this.websites.push(newWeb);
              }
          }
      );
      this.webService.findWebsiteById(params['websiteId']).subscribe(
          (website: any) => {
            this.currWebsite = new Website(website._id, website.name, website.developerId, website.description);
          }
      );
    });
  }

  updateWebsite() {
    if (this.currWebsite.name) {
      this.webService.updateWebsite(this.currWebsite.websiteId,
          new Website(this.currWebsite.websiteId, this.currWebsite.name, this.user.uid, this.currWebsite.description)).subscribe(
          (data: any) => {
            this.router.navigate(['/profile/website']);
          }
      );
    } else {
        this.errorFlag = true;
        this.errorMsg = 'Please enter name!';
    }
  }

  deleteWebsite() {
    this.webService.deleteWebsite(this.currWebsite.websiteId).subscribe(
        (data: any) => {
            this.router.navigate(['/profile/website']);
        }
    );
  }

}
