import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  userId: string;
  errorFlag: boolean;
  errorMsg = 'Please enter the name.';
  website: Website;
  websites: Website[] = [];

  constructor(private userService: UserService, private router: Router, private websiteService: WebsiteService,
              private activatedRouter: ActivatedRoute, private sharedService: SharedService) {
    this.website = new Website( '', '', undefined);
  }

  createNewWeb() {
    if (this.website.name === '') {
      this.errorFlag = true;
    } else {
      this.errorFlag = false;
      this.websiteService.createWebsite(this.userId, new Website(this.website.name, undefined, this.website.description))
        .subscribe((data) => {
          this.website = data;
          this.router.navigate(['/profile/website']);
        });
    }
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.userId = this.sharedService.user._id;
      this.userService.findUserById(this.userId).subscribe((user) => {
        this.websites = user.websites;
      });
    });
  }

}
