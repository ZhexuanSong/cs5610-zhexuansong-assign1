import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profilebar',
  templateUrl: './profilebar.component.html',
  styleUrls: ['./profilebar.component.css']
})
export class ProfilebarComponent implements OnInit {
  @Input() curUserId: String
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToProfile(userId: String) {
    this.router.navigate(['/user', userId]);
  }

}
