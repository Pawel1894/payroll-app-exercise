import { Employee } from './../Employee/Employee.ts';
import { ChangeEmployeeTransaction } from './ChangeEmployeeTransaction.ts';

export class ChangeNameTransaction extends ChangeEmployeeTransaction {
  constructor(empId: number, private newName: string) {
    super(empId);
  }

  Change(e: Employee): void {
    e.name = this.newName;
  }
}