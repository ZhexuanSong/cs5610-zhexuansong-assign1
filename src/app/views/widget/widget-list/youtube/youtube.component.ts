import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Widget} from '../../../../model/widget.model';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  @Input() widget: Widget;
  public url: any;
  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.widget.url);
  }

}
