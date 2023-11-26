export class ServiceCharge {
  private _date: Date;
  private _amount: number;

  constructor(date: Date, amount: number) {
    this._date = date;
    this._amount = amount;
  }

  set amount(value: number) {
    this._amount = value;
  }

  get amount() {
    return this._amount;
  }

  set date (value: Date) {
    this._date = value;
  }

  get date() {
    return this._date;
  }
}