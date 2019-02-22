import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../../../../model/widget.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
  @Input() widget: Widget;


  pageId: string;
  userId: string;
  webId: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.pageId = param.pid;
        this.webId = param.wid;
        this.userId = param.uid;
      }
    );
  }

}
