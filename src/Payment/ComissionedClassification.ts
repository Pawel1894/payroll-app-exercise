import { SalesReceipt } from '../SalesReceipt.ts';
import { PaymentClassification } from './PaymentClassification.ts';

export class CommissionedClassification implements PaymentClassification {
  private _salesReceipts = new Map<string, SalesReceipt>();

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

  AddSalesReceipt(receipt: SalesReceipt) {
    this._salesReceipts.set(receipt.date.toISOString(), receipt);
  }

  GetSalesReceipt(date: Date): SalesReceipt | undefined {
    return this._salesReceipts.get(date.toISOString());
  }
}