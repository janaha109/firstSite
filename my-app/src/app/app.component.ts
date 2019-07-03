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
      {linkName: 'Portfolio', linkAddr: 'homepage'},
      {linkName: 'About', linkAddr: '/profile'},
      {linkName: 'Contact', linkAddr: '/contact'},
    ]
  }
}
