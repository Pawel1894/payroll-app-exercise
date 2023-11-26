import { UnionAffiliation } from '../Affiliation/UnionAffiliation.ts';
import { PayrollDatabase } from '../DB/PayrollDatabase.ts';
import { ServiceCharge } from './ServiceCharge.ts';
import { Transaction } from './Transaction.ts';

export class ServiceChargeTransaction implements Transaction {
  private itsDate: Date;
  private itsAmount: number;
  private memberId: number;

  constructor(date: Date, amount: number, memberId: number) {
    this.itsDate = date;
    this.itsAmount = amount;
    this.memberId = memberId;
  }

  Execute(): void {
    const e = PayrollDatabase.GetUnionMember(this.memberId);
    if (!e) {
      throw new Error('Union member not found');
    }

    const af = e.affiliation;
    if (!af) {
      throw new Error('No affiliation for union member');
    }

    if(!(af instanceof UnionAffiliation)) throw new Error('Tried to add service charge to non-union member');

    af.AddServiceCharge(new ServiceCharge(this.itsDate, this.itsAmount));
  }
}