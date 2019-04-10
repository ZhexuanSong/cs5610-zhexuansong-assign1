import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  user: any;
  userId: String;
  website: any;
  websites: any;
  errorFlag: boolean;
  errorMsg: String;
  alert: String;

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router,
              private sharedService: SharedService) { }

  updateWebsite() {
    if (this.website.name === '') {
      this.errorFlag = true;
      this.errorMsg = 'Please enter name for this Website';
      return;
    }
    this.websiteService.updateWebsite(this.website._id, this.website).subscribe(
      (response: any) => {
        console.log('updated website');
        this.router.navigate(['..'], {relativeTo: this.activatedRoute});
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.website._id).subscribe(
      (response: any) => {
        console.log('deleted website: websiteId = ' + this.website._id);
        this.router.navigate(['..'], {relativeTo: this.activatedRoute});
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.getUser();
    this.errorFlag = false;
    this.alert = '* Please enter website name';
    this.websiteService.findWebsitesByUser(this.userId).subscribe(
      (websites: any) => {
        this.websites = websites;
      },
      (error: any) => {
        console.log(error);
      });
    this.activatedRoute.params.subscribe((params: any) => {
      this.websiteService.findWebsitesById(params['wid']).subscribe(
        (website: any) => {
          this.website = website;
        },
        (error: any) => {
          console.log(error);
        }
      );
    });
  }

  getUser() {
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }

}
