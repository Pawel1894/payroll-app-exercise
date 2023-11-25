import { assertEquals, assertExists } from "https://deno.land/std@0.206.0/assert/mod.ts";
import { AddSalariedEmployee, MonthlySchedule, SalariedClassification } from '../AddSalariedEmployee.ts';
import { PayrollDatabase } from '../../DB/PayrollDatabase.ts';
import { HoldMethod } from '../../HoldMethod.ts';

Deno.test("Should create salaried employee", () => {
  const empId = 1;

  const t = new AddSalariedEmployee(empId, "Bob", "Home", 1000.00);
  t.Execute();

  const e = PayrollDatabase.GetEmployee(empId);
  assertExists(e);
  assertEquals("Bob", e.name);

  const pc = e.classification;
  const sc = pc as SalariedClassification;
  assertExists(sc);

  assertEquals(1000.00, sc.salary);

  const ps = e.schedule;
  const ms = ps as MonthlySchedule;
  assertExists(ms);

  const pm = e.method;
  const hm = pm as HoldMethod;
  assertExists(hm);
});