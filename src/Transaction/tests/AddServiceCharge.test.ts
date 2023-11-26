import { assertExists, assertEquals } from 'https://deno.land/std@0.206.0/assert/mod.ts';
import { PayrollDatabase } from '../../DB/PayrollDatabase.ts';
import { AddHourlyEmployee } from '../AddHourlyEmployee.ts';
import { UnionAffiliation } from '../../Affiliation/UnionAffiliation.ts';
import { ServiceChargeTransaction } from '../ServiceChargeTransaction.ts';

Deno.test("Should add service charge to union member", () => {
  const empId = 1;

  const t = new AddHourlyEmployee(empId, "Bob", "Home", 100);
  t.Execute();

  const e = PayrollDatabase.GetEmployee(empId);
  assertExists(e);

  const af = new UnionAffiliation(12.5);
  
  e.affiliation = af;
  const memberId = 99;

  PayrollDatabase.AddUnionMember(memberId, e);

  const sct = new ServiceChargeTransaction(new Date(2021, 1, 1), 12.95, memberId);
  sct.Execute();

  const sc = af.GetServiceCharge(new Date(2021, 1, 1));
  assertExists(sc);
  assertEquals(12.95, sc.amount);
});