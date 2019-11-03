import { Component, OnInit } from '@angular/core';
import {WebService} from '../shared/web/WebService';
import {Event} from '../event/event';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  events: Event[];

  constructor(private web: WebService) { }

  ngOnInit() {
  }

  fetchUsers() {
    this.web.getEvents()
      .subscribe(
        (data => this.events = data),
        (e) => console.log(e));
  }

}
