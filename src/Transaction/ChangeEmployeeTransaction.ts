import { PayrollDatabase } from '../DB/PayrollDatabase.ts';
import { Employee } from '../Employee/Employee.ts';
import { Transaction } from './Transaction.ts';

export abstract class ChangeEmployeeTransaction implements Transaction {
  constructor(protected empId: number) {}

  protected abstract Change(e: Employee): void;

  Execute(): void {
    const employee = PayrollDatabase.GetEmployee(this.empId);
    if (employee) {
      this.Change(employee);
    }
  };
}