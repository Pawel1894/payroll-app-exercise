import { assertEquals, assertExists } from "https://deno.land/std@0.206.0/assert/mod.ts";
import { AddSalariedEmployee, MonthlySchedule, SalariedClassification } from '../AddSalariedEmployee.ts';
import { PayrollDatabase } from '../../DB/PayrollDatabase.ts';
import { HoldMethod } from '../../HoldMethod.ts';
import { AddHourlyEmployee, HourlyClassification, WeeklySchedule } from '../AddHourlyEmployee.ts';
import { AddCommissionedEmployee, CommissionedClassification } from '../AddCommissionedEmployee.ts';

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

Deno.test("Should create hourly employee", () => {
  const empId = 1;

  const t = new AddHourlyEmployee(empId, "Bob", "Home", 100);
  t.Execute();

  const e = PayrollDatabase.GetEmployee(empId);
  assertExists(e);
  assertEquals("Bob", e.name);

  const pc = e.classification;
  const sc = pc as HourlyClassification;
  assertExists(sc);

  assertEquals(100, sc.hourlyRate);

  const ps = e.schedule;
  const ms = ps as WeeklySchedule;
  
  assertExists(ms);

  const pm = e.method;
  const hm = pm as HoldMethod;
  assertExists(hm);
});

Deno.test("Should create commisioned employee", () => {
  const empId = 1;

  const t = new AddCommissionedEmployee(empId, "Bob", "Home", 100, 10);
  t.Execute();

  const e = PayrollDatabase.GetEmployee(empId);
  assertExists(e);
  assertEquals("Bob", e.name);

  const pc = e.classification;
  const sc = pc as CommissionedClassification;
  assertExists(sc);

  assertEquals(100, sc.salary);
  assertEquals(10, sc.commissionRate);

  const ps = e.schedule;
  const ms = ps as WeeklySchedule;
  
  assertExists(ms);

  const pm = e.method;
  const hm = pm as HoldMethod;
  assertExists(hm);
});