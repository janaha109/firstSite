import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  nameVal = "";
  thoughtVal = "";
  responses: any[] = [];
  constructor() { }

  ngOnInit() {}

  addResponse() {
    if (this.nameVal != "" && this.thoughtVal != "") {
      let newResponse = {id: this.responses.length, name: this.nameVal, thought: this.thoughtVal};
      this.responses.push(newResponse);
      this.nameVal = "";
      this.thoughtVal = "";
    } else {
      alert("You need to enter a name and a thought!");
    }
  }
}
