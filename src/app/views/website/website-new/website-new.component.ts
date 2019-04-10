import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['../../../app.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') websiteForm: NgForm;
  errorFlag: boolean;
  errorMsg: String;
  websiteId: String;
  name: String;
  description: String;
  userId: String;
  websites = [];
  user: {};

  constructor(private websiteService: WebsiteService,
              private sharedService: SharedService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.errorMsg = 'Please enter a website name';
    this.errorFlag = false;
    this.getUser();
  }

  create() {
    const website = new Website('', '', '', '');
    website.name = this.websiteForm.value.name;
    if (website.name === undefined || website.name.trim() === '') {
      this.errorFlag = true;
    } else {
      website.description = this.websiteForm.value.description;
      website.developerId = this.userId;
      return this.websiteService.createWebsite(this.userId, website).subscribe((returnWebsite: Website) => {
        this.router.navigate(['../'], {relativeTo: this.activatedRoute} );
      });
    }
  }

  getUser() {
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }
}
