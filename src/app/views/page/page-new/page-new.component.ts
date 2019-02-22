import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Page} from '../../../model/page.model';
import {PageService} from '../../../service/page.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

class Param {
}

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {


  @ViewChild('newPageForm') newPageForm: NgForm;

  webId: string;
  userId: string
  constructor(private activatedRoute: ActivatedRoute,private pageService: PageService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.webId = param.wid;
        this.userId = param.uid;
      }
    );
  }

  createPage() {
    const name = this.newPageForm.value.pageName;
    const title = this.newPageForm.value.pageTitle;
    this.pageService.createPage(this.webId, name, title);
    this.router.navigate(['user', this.userId, 'website', this.webId, 'page']);
  }
}
