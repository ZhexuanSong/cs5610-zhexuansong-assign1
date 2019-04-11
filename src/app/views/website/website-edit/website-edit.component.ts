import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  userId: String;
  websiteId: String;
  website: any;
  websites: any;

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  updateWebsite() {
    this.website._id = this.websiteId;
    this.websiteService.updateWebsite(this.websiteId, this.website).subscribe();
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId).subscribe();
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
        }
    );
    this.websiteService.findWebsiteById(this.websiteId).subscribe(
        (website: any) => {
          this.website = website;
        });
  this.websiteService.findWebsitesByUser(this.userId)
      .subscribe((data: any) => {
          this.websites = data;
      });
  console.log(this.websites);
  }

}
