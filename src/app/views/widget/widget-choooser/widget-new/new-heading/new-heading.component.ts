import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router, RouterLinkActive} from '@angular/router';
import {NgForm} from '@angular/forms';
import {WidgetService} from '../../../../../service/widget.service';

@Component({
  selector: 'app-new-heading',
  templateUrl: './new-heading.component.html',
  styleUrls: ['./new-heading.component.css']
})
export class NewHeadingComponent implements OnInit {

  widgetId: string;
  userId: string;
  pageId: string;
  @ViewChild('widgetForm') widgetForm: NgForm;
  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.widgetId = param.wdid;
        this.userId = param.uid;
        this.pageId = param.pid;
      }
    );
  }
  save() {
    const text = this.widgetForm.value.widgetText;
    const size = this.widgetForm.value.widgetSize;
    this.widgetService.createWidget('HEADING', this.pageId, size, text, '100%', 'url');
    this.router.navigate(['../'],{relativeTo: this.activatedRoute});
  }

}
