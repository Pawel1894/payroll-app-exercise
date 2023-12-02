import { assertEquals, assertExists } from 'https://deno.land/std@0.206.0/assert/mod.ts';
import { PayrollDatabase } from '../../DB/PayrollDatabase.ts';
import { AddHourlyEmployee } from '../AddHourlyEmployee.ts';
import { ChangeHourlyTransaction } from '../ChangeHourlyTransaction.ts';
import { HourlyClassification } from '../../Payment/HourlyClassification.ts';

Deno.test('Should allow to change hourly classification', () => {
    const empId = 1;
    const t = new AddHourlyEmployee(empId, 'James', 'Home', 100);
    t.Execute();

    const cht = new ChangeHourlyTransaction(empId, 200);
    cht.Execute();
    const e = PayrollDatabase.GetEmployee(empId);
    assertExists(e);
    const pc = e.classification as HourlyClassification;
    
    assertEquals(pc.hourlyRate, 200);
})