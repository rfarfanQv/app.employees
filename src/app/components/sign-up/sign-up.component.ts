import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';



import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit  {
  
  [x: string]: any;
  contactForm! : FormGroup;

 

  constructor(private service: EmployeeService,
    private readonly fb: FormBuilder
   ){

  }  

  employees: Employee[] = [];

  employee!: Employee;


  initForm(): FormGroup {
    return this.fb.group({

      ci: ['', [Validators.required, Validators.minLength(8)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      area: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone:['', [Validators.required,  Validators.minLength(7)]],
      mail: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {
    this.contactForm = this.initForm();
    this.employees = this.service.getEmployees();
  }

  onSubmit(): void {
    this.employees.push(this.contactForm.value);
    this.service.saveEmployee(this.employees);
    console.log(this.service);
    console.log('Form ->', this.contactForm.value);
    confirm("Wanna send?");
    this.contactForm = this.initForm();
    alert("Your employee has ben created");
  }

}

