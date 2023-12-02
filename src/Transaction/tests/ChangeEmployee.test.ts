import { assertEquals } from 'https://deno.land/std@0.206.0/assert/mod.ts';
import { PayrollDatabase } from '../../DB/PayrollDatabase.ts';
import { ChangeNameTransaction } from '../ChangeNameTransaction.ts';
import { AddHourlyEmployee } from '../AddHourlyEmployee.ts';

Deno.test("should allow to change name", () => {
  const empId = 1;

  new AddHourlyEmployee(empId, "James", "Home", 100).Execute();

  const t = new ChangeNameTransaction(empId, "Bob");
  t.Execute();

  const e = PayrollDatabase.GetEmployee(empId);
  assertEquals(e?.name, "Bob");
})