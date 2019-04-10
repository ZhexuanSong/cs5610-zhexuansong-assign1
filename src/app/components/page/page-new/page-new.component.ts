import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') pageForm: NgForm;
  page: any;
  webId: String;
  errorFlag: boolean;
  errorMsg: String;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.errorFlag = false;
    this.activatedRoute.params.subscribe((params: any) => {
      this.webId = params['wid'];
    });
    this.page = PageService.getNewPage();
  }

  createPage() {
    this.page.name = this.pageForm.value.name;
    this.pageService.createPage(this.webId, this.page).subscribe(
      (pages: any) => {
        console.log('created page');
        this.router.navigate(['..'], {relativeTo: this.activatedRoute});
      },
      (error: any) => {
        this.errorFlag = true;
        this.errorMsg = error._body;
        console.log(error);
      }
    );
  }
}
