import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../../user/user';
import {Event} from '../../event/event';

@Injectable()
export class WebService {
  private configUrl = 'https://testprojectapi.herokuapp.com/api/';

  constructor(private http: HttpClient) {}

  public getEvents = () =>
    this.http.get<Event[]>(this.configUrl + 'event')

  public getUsers = () =>
    this.http.get<User[]>( this.configUrl + 'participant')

  public getEvent = (id: string) =>
    this.http.get<Event>(this.configUrl + 'event')

  public getUser = (id: string) =>
    this.http.get<User>(this.configUrl + 'participant')

  public createEvent = (event: Event) =>
    this.http.post(this.configUrl + 'event', event)

  public createUser = (user: User) =>
    this.http.post(this.configUrl + 'participant', user)
}
