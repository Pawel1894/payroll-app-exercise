import { ServiceCharge } from '../Transaction/ServiceCharge.ts';

export interface Affiliation {
  AddServiceCharge: (serviceCharge: ServiceCharge) => void;
}