import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {WebsiteService} from 'src/app/website.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from 'src/app/model/Website';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  @ViewChild('f') websiteForm: NgForm;
  oldWebsite : Website;
  websiteId: String;
  userId: String;


  constructor(private websiteService : WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        console.log(params);
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.oldWebsite = this.websiteService.findWebsiteById(this.websiteId);
      });
  }
  updateWebsite() {
    let website = new Website(this.websiteId, this.websiteForm.value.newName, this.userId, this.websiteForm.value.newDescription);
    this.websiteService.updateWebsite(this.websiteId, website);
    this.router.navigate(['/user', this.userId, 'website']);

  }
  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId);
    this.router.navigate(['/user', this.userId, 'website']);
  }
  displayOldName() {
    return this.oldWebsite.name;
  }
  displayOldDescription() {
    return this.oldWebsite.description;
  }

}
