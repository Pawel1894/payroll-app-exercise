import { PaymentClassification } from '../Payment/PaymentClassification.ts';
import { PaymentSchedule } from '../Payment/PaymentSchedule.ts';
import { AddEmployee } from './AddEmployee.ts';

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

export class MonthlySchedule implements PaymentSchedule {
  // Implement methods and properties here
}

export class AddSalariedEmployee extends AddEmployee {
  private salary: number;

  constructor(empId: number, name: string, address: string, salary: number) {
    super(empId, name, address);
    this.salary = salary;
  }

  GetClassification(): PaymentClassification {
    return new SalariedClassification(this.salary);
  }

  GetSchedule(): PaymentSchedule {
    return new MonthlySchedule();
  }
}