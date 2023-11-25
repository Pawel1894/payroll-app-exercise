import { Employee } from '../Employee/Employee.ts';

// Fasade for the database
export class PayrollDatabase {
  private static employees: Map<number, Employee> = new Map<number, Employee>();

  static AddEmployee(empId: number, employee: Employee) {
    this.employees.set(empId, employee);
  }

  static GetEmployee(empId: number): Employee | undefined {
    return this.employees.get(empId);
  }

  static DeleteEmployee(empId: number) {
    this.employees.delete(empId);
  }

  static Clear() {
    this.employees.clear();
  }
}