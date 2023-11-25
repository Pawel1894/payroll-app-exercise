import { PaymentClassification } from '../Payment/PaymentClassification.ts';
import { PaymentSchedule } from '../Payment/PaymentSchedule.ts';
import { AddEmployeeTransaction } from './AddEmployeeTransaction.ts';

export class HourlyClassification {
  constructor(private _hourlyRate: number) {}

  set hourlyRate(value: number) {
    this._hourlyRate = value;
  }

  get hourlyRate() {
    return this._hourlyRate;
  }
}

export class WeeklySchedule {}

export class AddHourlyEmployee extends AddEmployeeTransaction {
  private hourlyRate: number;

  constructor(empId: number, name: string, address: string, hourlyRate: number) {
    super(empId, name, address);
    this.hourlyRate = hourlyRate;
  }

  GetClassification(): PaymentClassification {
    return new HourlyClassification(this.hourlyRate);
  }

  GetSchedule(): PaymentSchedule {
    return new WeeklySchedule();
  }
}