import { Employee } from '../Employee/Employee.ts';

// Fasade for the database
export class PayrollDatabase {
  private static employees = new Map<number, Employee>();
  private static unionMembers = new Map<number, Employee>();

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

  static AddUnionMember(memberId: number, employee: Employee) {
    this.unionMembers.set(memberId, employee);
  }

  static GetUnionMember(memberId: number): Employee | undefined {
    return this.unionMembers.get(memberId);
  }

  static RemoveUnionMember(memberId: number) {
    this.unionMembers.delete(memberId);
  }
}