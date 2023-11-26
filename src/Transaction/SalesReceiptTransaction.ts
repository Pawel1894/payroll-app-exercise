import { PayrollDatabase } from '../DB/PayrollDatabase.ts';
import { CommissionedClassification } from '../Payment/ComissionedClassification.ts';
import { SalesReceipt } from '../SalesReceipt.ts';

export class SalesReceiptTransaction {
	private itsDate: Date;
	private itsAmount: number;
	private empId: number;

	constructor(date: Date, amount: number, empId: number) {
		this.itsDate = date;
		this.itsAmount = amount;
		this.empId = empId;
	}

	Execute(): void {
		const e = PayrollDatabase.GetEmployee(this.empId);
		if (!e) {
			throw new Error('Employee not found');
		}

		const pc = e.classification;

    if(!pc) throw new Error('Employee has no classification')

    if(!(pc instanceof CommissionedClassification)) {
      throw new Error('Tried to add sales receipt to non-commissioned employee')
    }

    pc.AddSalesReceipt(new SalesReceipt(this.itsDate, this.itsAmount));
	}
}
