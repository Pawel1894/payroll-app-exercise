import { Employee } from '../Employee/Employee.ts';
import { PaymentClassification } from '../Payment/PaymentClassification.ts';
import { PaymentSchedule } from '../Payment/PaymentSchedule.ts';
import { ChangeEmployeeTransaction } from './ChangeEmployeeTransaction.ts';

export abstract class ChangeClassificationTransaction extends ChangeEmployeeTransaction {		
    constructor(empId: number) {
      super(empId);
    }

    abstract GetSchedule(): PaymentSchedule;

		abstract GetClassification(): PaymentClassification;

    protected Change(e: Employee): void {
			e.classification = this.GetClassification();
      e.schedule = this.GetSchedule();
    }		
}