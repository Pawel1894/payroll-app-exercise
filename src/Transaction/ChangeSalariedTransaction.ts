import { MonthlySchedule } from '../Payment/MonthlySchedule.ts';
import { PaymentClassification } from '../Payment/PaymentClassification.ts';
import { PaymentSchedule } from '../Payment/PaymentSchedule.ts';
import { SalariedClassification } from '../Payment/SalariedClassification.ts';
import { ChangeClassificationTransaction } from './ChangeClassificationTransaction.ts';

export class ChangeSalariedTransaction extends ChangeClassificationTransaction {
	constructor(empId: number, private salary: number) {
		super(empId);
	}

	GetSchedule(): PaymentSchedule {
		return new MonthlySchedule();
	}

	GetClassification(): PaymentClassification {
		return new SalariedClassification(this.salary);
	}
}
