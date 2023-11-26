import { PaymentClassification } from './PaymentClassification.ts';

export class CommissionedClassification implements PaymentClassification {
  constructor(private _salary: number, private _commissionRate: number) {}

  set salary(value: number) {
    this._salary = value;
  }

  get salary() {
    return this._salary;
  }

  set commissionRate(value: number) {
    this._commissionRate = value;
  }

  get commissionRate() {
    return this._commissionRate;
  }
}