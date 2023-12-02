import { Employee } from '../Employee/Employee.ts';
import { ChangeEmployeeTransaction } from './ChangeEmployeeTransaction.ts';

export class ChangeAddressTransaction extends ChangeEmployeeTransaction {
	constructor(empId: number, private newAddress: string) {
		super(empId);
		this.newAddress = newAddress;
	}

	Change(e: Employee) {
		e.address = this.newAddress;
	}
}
