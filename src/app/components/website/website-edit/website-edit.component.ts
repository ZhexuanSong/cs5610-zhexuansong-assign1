import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  // properties
  websiteId: String;
  websites: any[] = [{ _id: "", name: "", developerId: "", description: "" }];
  updatedWebsite: Website;
  name: String;
  developerId: String;
  description: String;

  constructor(private websiteService: WebsiteService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.websiteId = params['wid'];
        this.developerId = params['uid'];
      }
    );

    this.websites = this.websiteService.findWebsitesByUser(this.developerId);
    this.updatedWebsite = this.websiteService.findWebsiteById(this.websiteId);
    // this.name = this.website['name'];
    // if (this.developerId !== this.website['developerId']) {
    //   alert('Developer Id did not match!');
    // }
    // this.description = this.website['description'];
  }

  updateWebsite(updatedWebsite) {
    if (updatedWebsite.name.trim() != "") {
      updatedWebsite.developerId = this.developerId;
      this.websiteService.updateWebsite(updatedWebsite._id, updatedWebsite);
      let url: any = '/user/' + this.developerId + '/website';
      this.router.navigate([url]);
    }
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId);
    let url: any = '/user/' + this.developerId + '/website';
    this.router.navigate([url]);
  }
}
