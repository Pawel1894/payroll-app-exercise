import { Transaction } from './Transaction.ts';
import { PayrollDatabase } from '../DB/PayrollDatabase.ts';

export class DeleteEmployee implements Transaction {
  constructor(private empId: number) {
  }

  Execute(): void {
    PayrollDatabase.DeleteEmployee(this.empId);
  }
}