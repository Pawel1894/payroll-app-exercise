export class TimeCard {
  private _date: Date;
  private _hours: number;

  constructor(date: Date, hours: number) {
      this._date = date;
      this._hours = hours;
  }

  set date(value: Date) {
      this._date = value;
  }

  get date(): Date {
      return this._date;
  }
  
  set hours(value: number) {
      this._hours = value;
  }

  get hours(): number {
      return this._hours;
  }
}