import DateTimeFormat = Intl.DateTimeFormat;

export interface Event {
  id: string;
  name: string;
  description: string;
  time: DateTimeFormat;
}
