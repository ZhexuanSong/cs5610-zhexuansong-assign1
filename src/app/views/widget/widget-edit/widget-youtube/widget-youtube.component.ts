import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../../../model/widget.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {WidgetService} from '../../../../service/widget.service';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  @Input() widget: Widget;
  @ViewChild('widgetForm') widgetForm: NgForm;
  userId: string;
  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.userId = param.uid;
      }
    );
  }
  save() {
    const text = this.widgetForm.value.widgetText;
    const size = this.widgetForm.value.widgetSize;
    this.widgetService.updateWidget(this.widget.id, new Widget(this.widget.id, this.widget.widgetType,
      this.widget.pageId, size, text, this.widget.width, this.widget.url));
    alert( 'save successfully');
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widget.id);
    this.router.navigate(['../'],  {relativeTo: this.activatedRoute});
  }
}
