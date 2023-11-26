import { HourlyClassification } from '../Payment/HourlyClassification.ts';
import { PaymentClassification } from '../Payment/PaymentClassification.ts';
import { PaymentSchedule } from '../Payment/PaymentSchedule.ts';
import { WeeklySchedule } from '../Payment/WeeklySchedule.ts';
import { AddEmployee } from './AddEmployee.ts';

export class AddHourlyEmployee extends AddEmployee {
  private hourlyRate: number;

  constructor(empId: number, name: string, address: string, hourlyRate: number) {
    super(empId, name, address);
    this.hourlyRate = hourlyRate;
  }

  GetClassification(): PaymentClassification {
    return new HourlyClassification(this.hourlyRate);
  }

  GetSchedule(): PaymentSchedule {
    return new WeeklySchedule();
  }
}