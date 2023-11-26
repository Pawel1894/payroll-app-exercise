import { TimeCard } from '../TimeCard.ts';

export class HourlyClassification {
  private _timeCards: Map<string, TimeCard> = new Map<string, TimeCard>();

  constructor(private _hourlyRate: number) {}

  set hourlyRate(value: number) {
    this._hourlyRate = value;
  }

  get hourlyRate() {
    return this._hourlyRate;
  }

  AddTimeCard(timeCard: TimeCard) {
    this._timeCards.set(timeCard.date.toISOString(), timeCard);
  }

  GetTimeCard(date: Date): TimeCard | undefined {
    return this._timeCards.get(date.toISOString());
  }
}