import { EmployeeLevel } from "./EmployeeLevel";
import { IDepartment } from "./types";

export interface User {
  id: number | string
  firstName: string
  lastName: string
  phoneNo: string
  employeeLevel: string
  email: string
  employeeId?: string
  roles: EmployeeLevel
  department: IDepartment
  fullName: string
  createdAt: string
}

export interface AuthUser {
  id: number | string
  firstName: string
  lastName: string
  phoneNumber: string
  employeeLevel: string
  email: string
  employeeId?: string
  roles: EmployeeLevel
  department: IDepartment
  fullName: string
  createdAt: string
  token: string
}