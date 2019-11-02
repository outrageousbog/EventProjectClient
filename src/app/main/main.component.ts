import { Component, OnInit } from '@angular/core';
import {WebService} from '../shared/web/WebService';
import {User} from '../user/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: User[];

  constructor(private web: WebService) { }

  ngOnInit() {
  }

  fetchUsers() {
    this.web.getUsers()
      .subscribe(
        (data: User[]) => {
          this.users = data;
        },
        (e) => {
          console.log(e);
        }
      )
  }

}
