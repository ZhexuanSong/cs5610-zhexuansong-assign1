import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../service/website.service';
import {Website} from '../../../model/website.model';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  id: string;
  website: Website;
  @ViewChild('webEditForm') webEditForm: NgForm;
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.id = param.wid;
        this.website = this.websiteService.findWebsiteById(this.id);
      }
    );
  }

  editWeb() {
      const name = this.webEditForm.value.webName;
      const description = this.webEditForm.value.description;
      this.websiteService.updateWebsite(this.id, new Website(this.id, name, this.website.developerId, description));
      alert( 'save successfully');
      this.router.navigate(['/user', this.website.developerId, 'website']);
  }

  deleteWeb() {
    this.websiteService.deleteWebsite(this.id);
    this.router.navigate(['../'],{relativeTo: this.activatedRoute});
  }


}
