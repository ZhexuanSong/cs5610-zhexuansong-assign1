import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  userId: string;
  websiteId: string;
  errorFlag: boolean;
  errorMsg = 'Please enter the name.';
  curWebsite: Website;
  websites: Website[] = [];

  constructor(private userService: UserService, private activatedRouter: ActivatedRoute,
              private websiteService: WebsiteService, private router: Router, private sharedService: SharedService) {
    this.curWebsite = new Website('', '', undefined);
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.userId = this.sharedService.user._id;
      this.websiteId = params.websiteId;
      this.userService.findUserById(this.userId).subscribe((user) => {
        this.websites = user.websites;
      });
      this.websiteService.findWebsiteById(this.websiteId).subscribe((data: Website) => {
        this.curWebsite = data;
      });
    });
  }

  updateCurWebsite() {
    if (this.curWebsite.name === '') {
      this.errorFlag = true;
    } else {
      this.errorFlag = false;
      this.websiteService.updateWebsite(this.websiteId, this.curWebsite)
                          .subscribe((data: Website) => {
                            this.router.navigate(['/profile/website']);
                          });
    }
  }

  deleteWeb() {
    this.websiteService.deleteWebsite(this.websiteId).subscribe(() => {
      alert('delete successfully');
      this.router.navigate(['/profile/website']);
    });
  }
}
