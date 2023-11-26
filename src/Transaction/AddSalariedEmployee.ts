import { MonthlySchedule } from '../Payment/MonthlySchedule.ts';
import { PaymentClassification } from '../Payment/PaymentClassification.ts';
import { PaymentSchedule } from '../Payment/PaymentSchedule.ts';
import { SalariedClassification } from '../Payment/SalariedClassification.ts';
import { AddEmployee } from './AddEmployee.ts';

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