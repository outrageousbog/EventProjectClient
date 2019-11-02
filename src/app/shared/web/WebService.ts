import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../../user/user';

@Injectable()
export class WebService {
  private _configUrl = "https://localhost:5001/api/";

  constructor(private http: HttpClient) {}

  public getEvents = () =>
    this.http.get<Event[]>(this._configUrl + "event");

  public getUsers = () =>
    this.http.get<User[]>( this._configUrl + "participant");

  public getEvent = (id: string) =>
    this.http.get<Event>(this._configUrl + "event");

  public getUser = (id: string) =>
    this.http.get<User>(this._configUrl + "participant");

  public createEvent = (event: Event) =>
    this.http.post(this._configUrl + "event", event);

  public createUser = (user: User) =>
    this.http.post(this._configUrl + "participant", user);
}
