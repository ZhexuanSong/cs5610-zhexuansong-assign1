import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WebsiteService} from '../../../service/website.service';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  @ViewChild('newWebForm') newWebForm: NgForm;
  constructor(private activatedRoute: ActivatedRoute, private webService: WebsiteService, private router: Router) { }

  developerId: string;
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.developerId = param.uid;
      }
    );
  }

  createWeb() {
    const name = this.newWebForm.value.webName;
    const description = this.newWebForm.value.description;
    this.webService.createWebsite(this.developerId, name, description);
    this.router.navigate(['user', this.developerId, 'website']);
  }

}
