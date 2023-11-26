import { CommissionedClassification } from '../Payment/ComissionedClassification.ts';
import { PaymentClassification } from '../Payment/PaymentClassification.ts';
import { WeeklySchedule } from '../Payment/WeeklySchedule.ts';
import { AddEmployee } from './AddEmployee.ts';

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