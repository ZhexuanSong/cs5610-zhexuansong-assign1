import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model.client';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  userId: User;
  websites: Website[];
  web: Website;
  errorFlag: boolean;
  errorMsg = "Website name can't  be empty!";

  constructor(private websiteService: WebsiteService,
              private route: ActivatedRoute, private router: Router) {
    this.web = new Website();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteService.findAllWebsitesForUser(params['uid']).subscribe(
        (websites: any) => {
          this.websites = websites;
        });
      this.websiteService.findWebsiteById(params['wid']).subscribe(
        (website: Website) => this.web = website
      );
    });
  }

  updateWeb(website: Website) {
    console.log(this.web);
    if (!this.web.name) {
      this.errorFlag = true;
    } else {
      this.websiteService.updateWebsite(this.web._id, this.web).subscribe(
        (u_website: Website) => {
          console.log('update web,' + u_website);
          this.router.navigate((['/user', this.userId, 'website']));
        }
      );
    }
  }

  deleteWeb() {
    console.log(this.web);
    this.websiteService.deleteWebsite(this.web._id).subscribe(
      (data: Website) => {
        console.log('deleted website: ' + data._id);
        this.router.navigate((['/user', this.userId, 'website']));
      }
    );
  }

}
