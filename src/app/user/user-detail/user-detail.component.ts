import {Component, OnInit} from '@angular/core';
import {WebService} from '../../shared/web/WebService';
import {User} from '../user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Event} from '../../event/event';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  users: User[];
  events: Event[];
  userForm: FormGroup;

  constructor(private http: WebService) {
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      eventList: new FormControl(null, [Validators.required]),
    });

    this.http.getEvents()
      .subscribe(data => this.events = data);

    this.getData();
  }

  getData() {
    this.http.getUsers()
      .subscribe(
        (data => this.users = data),
        (e) => console.log(e)
      );
  }

  submitForm() {
    console.log(this.userForm.value);
    this.http.createUser(this.userForm.value)
      .subscribe(
        () => this.getData(),
      )
  }
}
