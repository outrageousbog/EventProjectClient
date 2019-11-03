import { Component, OnInit } from '@angular/core';
import {WebService} from '../../shared/web/WebService';
import {Event} from '../event';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class EventDetailComponent implements OnInit {
  events: Event[];
  eventForm: FormGroup;

  constructor(private http: WebService) { }

  ngOnInit() {

    this.eventForm = new FormGroup({
        name: new FormControl(null, [Validators.required]),
        description: new FormControl(null, [Validators.required]),
        time: new FormControl(null, [Validators.required])
    });

    this.getEvents();
  }

  getEvents() {
    this.http.getEvents()
      .subscribe(
        (data => this.events = data),
        (e => console.log(e))
      );
  }

  submitForm() {
    this.http.createEvent(this.eventForm.value)
      .subscribe(
        () => this.getEvents(),
        (e) => this.displayError(e),
        )
  }

  private displayError(e: Error) {
    console.log(e);
  }
}
