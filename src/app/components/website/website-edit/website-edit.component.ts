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
  oldWebsite: Website;
  websiteId: String;
  userId: String;


  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.oldWebsite = new Website('', '', '', '');
  }


  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        console.log(params);
        this.userId = params['uid'];
        this.websiteId = params['wid'];
      });
    this.websiteService.findWebsiteById(this.websiteId)
      .subscribe(
        website => this.oldWebsite = website);
  }
  updateWebsite() {
    const website = new Website(this.websiteId, this.websiteForm.value.newName, this.userId, this.websiteForm.value.newDescription);
    this.websiteService.updateWebsite(this.websiteId, website)
      .subscribe(
        () => this.goBack());


  }
  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId).subscribe(
      () => this.goBack()
    );

  }
  goBack() {
    this.router.navigate(['/user', this.userId, 'website']);

  }
  displayOldName() {
    return this.oldWebsite.name;
  }
  displayOldDescription() {
    return this.oldWebsite.description;
  }

}
