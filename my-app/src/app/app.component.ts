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
      {linkName: 'Entrance', linkAddr: 'homepage'},
      {linkName: 'Timeline', linkAddr: '/profile'},
      {linkName: 'Social Corner', linkAddr: '/contact'},
      {linkName: 'End Game', linkAddr: '/sample'},
    ]
  }
}
