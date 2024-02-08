import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpNewEditComponent } from '../emp-new-edit/emp-new-edit.component';
import { EmployeeService } from '../../services/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-emp-overview',
  templateUrl: './emp-overview.component.html',
  styleUrls: ['./emp-overview.component.css'],
})
export class EmpOverviewComponent implements OnInit {
  displayedColumns: string[] = [
    'actions',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'experience',
    'salary',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private matDialog: MatDialog,
    private employeeService: EmployeeService,
    private toastService: ToastService
  ) {}
  ngOnInit(): void {
    this.getEmployeeList();
  }

  openAddNewDialog() {
    this.matDialog
      .open(EmpNewEditComponent)
      .afterClosed()
      .subscribe({
        next: (success: boolean) => {
          if (success) {
            this.getEmployeeList();
          }
        },
      });
  }

  openEditExistingForm(data: any) {
    this.matDialog
      .open(EmpNewEditComponent, {
        data,
      })
      .afterClosed()
      .subscribe(() => {
        this.getEmployeeList();
      });
  }

  getEmployeeList() {
    this.employeeService.getAllEmployees().subscribe({
      next: (response) => {
        // console.log(response);
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  deleteExistingEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (response) => {
        this.toastService.openToast('Emloyee successfully deleted!', 'OK');
        this.getEmployeeList();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
