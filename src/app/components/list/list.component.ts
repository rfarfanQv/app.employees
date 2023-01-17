import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private service: EmployeeService) { }


  radioButtonSeleccionado = 'Todos';

  ngOnInit(): void {

    this.employees = this.service.getEmployees();
  }


  getTotalEmpleados(): number {
    return this.employees.length;
  }


  getTotalDesarrollo(): number {
    return this.employees.filter(list => list.area === 'Desarrollo').length;
  }


  getTotalAutomatizacion(): number {
    return this.employees.filter(list => list.area === 'Automatizaciion').length;
  }


  getTotalVentas(): number {
    return this.employees.filter(list => list.area === 'Ventas').length;
  }

  getTotalAprendiz(): number {
    return this.employees.filter(list => list.area === 'Aprendiz').length;
  }



  empleadoCountRadioButtonChange(radioButtonSelec: string): void {
    this.radioButtonSeleccionado = radioButtonSelec;
  }


}


