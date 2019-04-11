import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  userId: string;
  websites: Website[];
  newWeb: Website;
  newWebsiteName: string;
  newWebsiteDescription: string;
  errorFlag: boolean;
  errorMsg = "Website name can't  be empty!";

  constructor(private userService: UserService,
              private websiteService: WebsiteService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteService.findAllWebsitesForUser(params['uid']).subscribe(
        (websites: any) => {
          this.websites = websites;
        });
    });
  }

  newWebsite() {
    if (!this.newWebsiteName) {
      this.errorFlag = true;
    } else {
      this.newWeb = {_id: '', name: this.newWebsiteName, developerId: this.userId, description: this.newWebsiteDescription};
      this.websiteService.createWebsite(this.userId, this.newWeb).subscribe(
        (website: Website) => {
          this.newWeb = website;
          console.log('created website: ' + this.newWeb._id + ', name: ' + this.newWeb.name);
          this.router.navigate(['../'], {relativeTo: this.route});
        });
    }
  }

}
