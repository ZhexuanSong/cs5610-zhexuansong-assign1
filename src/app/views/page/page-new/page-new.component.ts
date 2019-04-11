import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
    @ViewChild('f') myPageForm: NgForm;
    websiteId: String;
    constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) {}
    createPage() {
        const page = {
            name: this.myPageForm.value.pagename,
            title: this.myPageForm.value.pagetitle,
            _website: this.websiteId,
        }
        this.pageService.createPage(this.websiteId, page).subscribe((data: any) => {
            console.log('create page: ' + data._id + ' ' + data.name);
        });
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: any) => {
                this.websiteId = params['wid'];
            }
        );
    }
}
