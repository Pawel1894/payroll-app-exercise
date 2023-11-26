import { HourlyClassification } from './Payment/HourlyClassification.ts';
import { PaymentClassification } from './Payment/PaymentClassification.ts';

export function isHourlyClassification(classification: PaymentClassification): classification is HourlyClassification {
  return classification instanceof HourlyClassification;
}