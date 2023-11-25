import { HoldMethod } from '../HoldMethod.ts';
import { PaymentClassification } from '../Payment/PaymentClassification.ts';
import { PaymentSchedule } from '../Payment/PaymentSchedule.ts';

export class Employee {
  private _empId: number;
  private _name: string;
  private _address: string;
  private _classification: PaymentClassification = {};
  private _schedule: PaymentSchedule = {};
  private _method: HoldMethod = {};

  constructor(empId: number, name: string, address: string) {
    this._empId = empId;
    this._name = name;
    this._address = address;
  }

  get empId() {
    return this._empId;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get address() {
    return this._address;
  }

  set address(address: string) {
    this._address = address;
  }

  get classification(): PaymentClassification {
    return this._classification;
  }

  set classification(value: PaymentClassification) {
    this._classification = value;
  }

  get schedule(): PaymentSchedule {
    return this._schedule;
  }

  set schedule(value: PaymentSchedule) {
    this._schedule = value;
  }

  get method(): HoldMethod {
    return this._method;
  }

  set method(value: HoldMethod) {
    this._method = value;
  }
}