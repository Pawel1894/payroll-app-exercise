import { assertEquals } from 'https://deno.land/std@0.206.0/assert/mod.ts';
import { PayrollDatabase } from '../../DB/PayrollDatabase.ts';
import { AddHourlyEmployee } from '../AddHourlyEmployee.ts';
import { ChangeAddressTransaction } from '../ChangeAddressTransaction.ts';

Deno.test("should change employee address", () => {
  const empId = 1;

  new AddHourlyEmployee(empId, "James", "Home", 100).Execute();

  new ChangeAddressTransaction(empId, "Not Home").Execute();

  const e = PayrollDatabase.GetEmployee(empId);
  assertEquals(e?.address, "Not Home");
})