import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {WidgetService} from '../../../../../service/widget.service';

@Component({
  selector: 'app-new-youtube',
  templateUrl: './new-youtube.component.html',
  styleUrls: ['./new-youtube.component.css']
})
export class NewYoutubeComponent implements OnInit {

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
    const width = this.widgetForm.value.width;
    const url = this.widgetForm.value.url;
    this.widgetService.createWidget('YOUTUBE', this.pageId, '4', text, width, url);
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

}
