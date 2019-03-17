import {Component, OnInit} from '@angular/core';
import {WidgetService} from 'src/app/widget.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from 'src/app/model/Widget';
import {DomSanitizer} from '@angular/platform-browser';
import {SortableDirective} from 'src/app/sortable.directive';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css'],

})
export class WidgetListComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  widgets: Widget[];
  startIndex: Number;
  endIndex: Number;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private _sanitizer: DomSanitizer) {
    this.startIndex = 0;
    this.endIndex = 0;
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        // console.log(params);
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
      });
    this.widgetService.findWidgetsByPage(this.pageId).subscribe(
      widgets => this.widgets = widgets
    );
    console.log(this.widgets);

  }

  // get the array from sortable.directive.js.

  onNewIndexes(newIndexes) {
    this.startIndex = newIndexes.startIndex;
    this.endIndex = newIndexes.endIndex;
    // console.log("The startindex frontend is "+this.startIndex);
    // console.log("The endIndex frontend is "+this.endIndex);
    this.widgetService.reorderWidgets(this.startIndex, this.endIndex, this.pageId, this.widgets)
      .subscribe();
  }

  refresh() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);

  }

  goToWidgetEdit(widgetId) {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', widgetId]);

  }

  convertToSafeYoutubeUrl(url) {
    // first get the id of url
    // the url must have /embed endpoint so that youtube server will allow this connection
    var res = url.split('\/');
    // console.log(res);
    let id = res[res.length - 1];
    if (id.indexOf('watch?v=') !== -1) {
      id = id.substring(8);
    }
    url = "https://www.youtube.com/embed/" + id;
    //console.log(url);
    return this.convertToSafeUrl(url);
  }

  convertToSafeUrl(url) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  goBack() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page']);

  }

  goToWidgetChoose() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
  }

}
