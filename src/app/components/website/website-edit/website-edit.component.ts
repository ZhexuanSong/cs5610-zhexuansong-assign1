import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  website: Website;
  userId: String;
  websites: Website[] = [];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  updateWebsite() {
    this.websiteService.updateWebsite(this.website._id, this.website).subscribe(
      (website: Website) => {
        console.log(website);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.website._id).subscribe(
      (data: Website) => {
        console.log('deleted website: ' + data._id);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.websiteService.findWebsitesByUser(params['uid']).subscribe(
        (websites: any) => {
          this.websites = websites;
        },
        (error: any) => {
          console.log(error);
        });
      this.websiteService.findWebsitesById(params['wid']).subscribe(
        (website: Website) => {
          this.website = website;
        },
        (error: any) => {
          console.log(error);
        }
      );
    });
  }

}
