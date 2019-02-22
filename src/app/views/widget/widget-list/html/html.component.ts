import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../../../../model/widget.model';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {
  @Input() widget: Widget;
  constructor() { }

  ngOnInit() {
  }

}
