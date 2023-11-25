import { PayrollDatabase } from '../DB/PayrollDatabase.ts';
import { Employee } from '../Employee/Employee.ts';
import { HoldMethod } from '../HoldMethod.ts';
import { PaymentClassification } from '../Payment/PaymentClassification.ts';
import { PaymentSchedule } from '../Payment/PaymentSchedule.ts';
import { Transaction } from './Transaction.ts';

export abstract class AddEmployeeTransaction implements Transaction {
  protected itsEmpId: number;
  protected itsName: string;
  protected itsAddress: string;

  constructor(empId: number, name: string, address: string) {
    this.itsEmpId = empId;
    this.itsName = name;
    this.itsAddress = address;
  }

  abstract GetClassification(): PaymentClassification
  abstract GetSchedule(): PaymentSchedule;
  
  Execute() {
    const pc = this.GetClassification();
    const ps = this.GetSchedule();
    const pm = new HoldMethod();
    const e = new Employee(this.itsEmpId, this.itsName, this.itsAddress);
    e.classification = pc;
    e.schedule = ps;
    e.method = pm;
    PayrollDatabase.AddEmployee(this.itsEmpId, e);
  }
}