import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-website-footer',
  templateUrl: './website-footer.component.html',
  styleUrls: ['./website-footer.component.css']
})
export class WebsiteFooterComponent implements OnInit {

  @Input()
  uid: string;

  constructor() { }

  ngOnInit() {
  }

}
