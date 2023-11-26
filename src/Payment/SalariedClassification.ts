import { PaymentClassification } from './PaymentClassification.ts';

export class SalariedClassification implements PaymentClassification {
  constructor(private _salary: number) {}
  // Implement other methods and properties here

  set salary(value: number) {
    this._salary = value;
  }

  get salary() {
    return this._salary;
  }
}