import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
routerLinks: any;

  constructor() { }

  ngOnInit() {
    this.routerLinks = [
      {linkName: 'Homepage', linkAddr: ''},
      {linkName: 'Profile', linkAddr: '/profile'},
      {linkName: 'Contact', linkAddr: '/contact'},
    ]
  }
}
