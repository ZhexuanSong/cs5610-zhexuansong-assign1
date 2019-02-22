import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-widget-new',
  templateUrl: './widget-new.component.html',
  styleUrls: ['./widget-new.component.css']
})
export class WidgetNewComponent implements OnInit {

  part: string
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.part = param.part;
      }
    );
  }

}
