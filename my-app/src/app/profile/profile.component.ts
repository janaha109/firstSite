import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
comments: any;

  constructor() { }

  ngOnInit() {
    this.comments = [
      {name: 'John Doe', email: 'jd@d.d', comment: "hey friend!"},
      {name: 'Jane Doe', email: 'jane@d.d', comment: "hey buddy!"},
      {name: 'John Smith', email: 'js@d.d', comment: "hey pal!"},
      {name: 'Kyle John', email: 'kj@d.d', comment: "hey friend!"},
      {name: 'Johnny Walker', email: 'jd@d.d', comment: "hey friend!"},
      {name: 'John Doe', email: 'jd@d.d', comment: "hey friend!"},
      {name: 'John Doe', email: 'jd@d.d', comment: "hey friend!"},
      {name: 'John Doe', email: 'jd@d.d', comment: "hey friend!"},
    ]
  }

}
