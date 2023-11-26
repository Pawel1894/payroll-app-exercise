import { PayrollDatabase } from '../DB/PayrollDatabase.ts';
import { TimeCard } from '../TimeCard.ts';
import { isHourlyClassification } from '../utils.ts';
import { Transaction } from './Transaction.ts';

export class TimeCardTransaction implements Transaction {
    private itsDate: Date;
    private itsHours: number;
    private empId: number;

    constructor(date: Date, hours: number, empId: number) {
        this.itsDate = date;
        this.itsHours = hours;
        this.empId = empId;
    }

    Execute(): void {
     const emp = PayrollDatabase.GetEmployee(this.empId); 
     const tc = new TimeCard(this.itsDate, this.itsHours);
     const classification = emp?.classification

     if(classification && isHourlyClassification(classification)) {
        classification.AddTimeCard(tc);
     }
    }
}

