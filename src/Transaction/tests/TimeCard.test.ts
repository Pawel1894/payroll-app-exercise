import { assertEquals, assertExists } from "https://deno.land/std@0.206.0/assert/mod.ts";
import { AddHourlyEmployee } from '../AddHourlyEmployee.ts';
import { PayrollDatabase } from '../../DB/PayrollDatabase.ts';
import { TimeCardTransaction } from '../TimeCardTransaction.ts';
import { HourlyClassification } from '../../Payment/HourlyClassification.ts';

Deno.test("Should create time card and assigned to employee", () => {
  const empId = 2;

  new AddHourlyEmployee(empId, "Bill", "Home", 15.25).Execute();

  const tct = new TimeCardTransaction(new Date(2021, 1, 1), 8, empId);
  tct.Execute();

  const employee = PayrollDatabase.GetEmployee(empId);
  assertExists(employee);

  const pc = employee.classification;
  const hc = pc as HourlyClassification;
  const tc = hc.GetTimeCard(new Date(2021, 1, 1));
  
  assertExists(tc);
  assertEquals(8, tc.hours);  
});