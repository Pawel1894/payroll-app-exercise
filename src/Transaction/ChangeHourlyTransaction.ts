import { HourlyClassification } from '../Payment/HourlyClassification.ts';
import { WeeklySchedule } from '../Payment/WeeklySchedule.ts';
import { ChangeClassificationTransaction } from './ChangeClassificationTransaction.ts';

export class ChangeHourlyTransaction extends ChangeClassificationTransaction {
  constructor(empId: number, private hourlyRate: number) {
    super(empId);
  }

  GetSchedule() {
    return new WeeklySchedule();
  }

  GetClassification() {
    return new HourlyClassification(this.hourlyRate);
  }
}