import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-widget-choooser',
  templateUrl: './widget-choooser.component.html',
  styleUrls: ['./widget-choooser.component.css']
})
export class WidgetChoooserComponent implements OnInit {

  userId: string;
  widgetsChooser = ['Header', 'Label', 'HTML', 'Text Input', 'Link', 'Button', 'Image', 'Youtube', 'Data Table', 'Repeater'];
  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.userId = param.uid;
      }
    );
  }

}
