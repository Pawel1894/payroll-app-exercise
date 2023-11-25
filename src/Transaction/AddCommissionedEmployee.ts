import { PaymentClassification } from '../Payment/PaymentClassification.ts';
import { AddEmployee } from './AddEmployee.ts';
import { WeeklySchedule } from './AddHourlyEmployee.ts';

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

export class AddCommissionedEmployee extends AddEmployee {
  private salary: number;
  private comissionRate: number;

  constructor(itsEmpId: number, itsName: string, itsAddress: string, salary: number, comissionRate: number) {
    super(itsEmpId, itsName, itsAddress);
    this.salary = salary;
    this.comissionRate = comissionRate;
  }

  GetClassification(): PaymentClassification {
    return new CommissionedClassification(this.salary, this.comissionRate);
  }

  GetSchedule() {
    return new WeeklySchedule();
  }
}