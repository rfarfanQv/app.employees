import { Injectable } from '@angular/core';
import { Employee } from './models/Employee';



    @Injectable({
      providedIn: 'root'
    })
    export class EmployeeService {
      CLAVE_LOCAL_STORAGE = "employees"

      constructor() { }

      getEmployees(): Employee[] {
        return JSON.parse(localStorage.getItem(this.CLAVE_LOCAL_STORAGE) || "[]")
      }
      saveEmployee(employees: Employee[]) {
        localStorage.setItem(this.CLAVE_LOCAL_STORAGE, JSON.stringify(employees))
      }
    }