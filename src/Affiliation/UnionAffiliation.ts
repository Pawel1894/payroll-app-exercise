import { ServiceCharge } from '../Transaction/ServiceCharge.ts';
import { Affiliation } from './Affiliation.ts';

export class UnionAffiliation implements Affiliation {
  private _dues: number;
  private _serviceCharges: Map<string, ServiceCharge> = new Map();

  constructor(dues: number) {
    this._dues = dues;
  }

  set dues(value: number) {
    this._dues = value;
  }

  get dues() {
    return this._dues;
  }

  AddServiceCharge(serviceCharge: ServiceCharge) {
    this._serviceCharges.set(serviceCharge.date.toISOString(), serviceCharge);
  }

  GetServiceCharge(date: Date): ServiceCharge | undefined {
    return this._serviceCharges.get(date.toISOString());
  }
}
