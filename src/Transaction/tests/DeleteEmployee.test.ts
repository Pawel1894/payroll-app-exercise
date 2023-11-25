
import { assertFalse } from "https://deno.land/std@0.206.0/assert/mod.ts";
import { PayrollDatabase } from '../../DB/PayrollDatabase.ts';
import { AddCommissionedEmployee } from '../AddCommissionedEmployee.ts';
import { DeleteEmployee } from '../DeleteEmployee.ts';

Deno.test("Should delete employee", () => {
  const empId = 3;

  new AddCommissionedEmployee(empId, "Lance", "Home", 2500, 3.2).Execute();

  const t = new DeleteEmployee(empId);
  t.Execute();

  const employee = PayrollDatabase.GetEmployee(empId);

  assertFalse(employee);
});