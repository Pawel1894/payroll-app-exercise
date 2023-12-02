import { SalariedClassification } from './../../Payment/SalariedClassification.ts';
import { assertEquals } from 'https://deno.land/std@0.206.0/assert/mod.ts';
import { PayrollDatabase } from '../../DB/PayrollDatabase.ts';
import { AddSalariedEmployee } from '../AddSalariedEmployee.ts';
import { ChangeSalariedTransaction } from '../ChangeSalariedTransaction.ts';

Deno.test("Should change salaried classification", () => {
    const empId = 1;

    new AddSalariedEmployee(empId, "James", "Home", 1000).Execute();

    new ChangeSalariedTransaction(empId, 2000).Execute();

    const e = PayrollDatabase.GetEmployee(empId);
    const sc = e?.classification as SalariedClassification;

    assertEquals(sc.salary, 2000);
})