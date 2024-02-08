import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-emp-new-edit',
  templateUrl: './emp-new-edit.component.html',
  styleUrls: ['./emp-new-edit.component.css'],
})
export class EmpNewEditComponent implements OnInit {
  education: string[] = ['High School', 'Bachelor', 'Master', 'Doctorate'];
  experience: string[] = [
    'Intern',
    'Consulting',
    'Senior Consulting',
    'Manager',
    'Senior Manager',
    'Partner',
  ];

  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private matDialogRef: MatDialogRef<EmpNewEditComponent>,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.employeeForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      experience: '',
      salary: '',
    });
  }

  ngOnInit(): void {
    this.employeeForm.patchValue(this.data);
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      // console.log(this.employeeForm)
      if (this.data) {
        this.employeeService
          .updateEmployee(this.data.id, this.employeeForm.value)
          .subscribe({
            next: (success: any) => {
              this.toastService.openToast('Employee was updated with success!');
              // console.log(this.matDialogRef);
              this.matDialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.employeeService.addEmployee(this.employeeForm.value).subscribe({
          next: (success: any) => {
            this.toastService.openToast(
              'New Employee added with success!',
              'OK'
            );
            console.log(this.matDialogRef);
            this.matDialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
