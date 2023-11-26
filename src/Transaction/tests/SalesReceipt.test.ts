import { assertExists, assertEquals } from 'https://deno.land/std@0.206.0/assert/mod.ts';
import { PayrollDatabase } from '../../DB/PayrollDatabase.ts';
import { CommissionedClassification } from '../../Payment/ComissionedClassification.ts';
import { SalesReceiptTransaction } from '../SalesReceiptTransaction.ts';
import { AddCommissionedEmployee } from '../AddCommissionedEmployee.ts';

Deno.test("should be able to add a sales receipt", () => {
    const empId = 2;

    new AddCommissionedEmployee(empId, "Bill", "Home", 1000, 10).Execute();

    new SalesReceiptTransaction(new Date(2021, 1, 1), 1000, empId).Execute();

    const emp = PayrollDatabase.GetEmployee(empId);
    assertExists(emp);

    const pc = emp.classification;
    const pm = pc as CommissionedClassification;

    const receipt = pm.GetSalesReceipt(new Date(2021, 1, 1));

    assertExists(receipt);
    assertEquals(1000, receipt.amount);
});