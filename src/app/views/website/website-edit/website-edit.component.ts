import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Website} from '../../../models/website.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.services.client';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['../../../app.component.css']
})
export class WebsiteEditComponent implements OnInit {
  @ViewChild('f') websiteForm: NgForm;
  errorFlag: boolean;
  errorMsg: String;
  websiteId: String;
  website: Website;
  name: String;
  description: String;
  userId: String;
  websites = [];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMsg = 'Please enter a website name';
    this.activatedRoute.params
      .subscribe(
        params => {
          return this.websiteService.findWebsiteByUser(params['uid']).subscribe((returnWebsites: Website[]) => {
            this.userId = params['uid'];
            this.websites = returnWebsites;
          });
        }
      );
    this.activatedRoute.params
      .subscribe(
        params => {
          return this.websiteService.findWebsiteById(params['wid']).subscribe((returnWebsite: Website) => {
            this.website = returnWebsite;
            this.websiteId = this.website._id;
            this.userId = this.website.developerId;
            this.name = this.website.name;
            this.description = this.website.description;
          });
        }
      );
  }

  update() {
    this.website.name = this.websiteForm.value.name;
    if (this.website.name.trim() === '' || this.website.name === undefined) {
      this.errorFlag = true;
    } else {
      this.website.description = this.websiteForm.value.description;
      return this.websiteService.updateWebsite(this.websiteId, this.website).subscribe((website: Website) => {
        this.router.navigate(['../'], {relativeTo: this.activatedRoute} );
      });
    }
  }

  delete() {
    return this.websiteService.deleteWebsite(this.websiteId).subscribe((website: Website) => {
    });
  }
}
