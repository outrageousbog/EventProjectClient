import {Event} from '../event/event';

export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  eventList: Event[];
}
