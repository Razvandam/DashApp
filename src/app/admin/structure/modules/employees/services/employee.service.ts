import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/employees', data);
  }

  getAllEmployees(): Observable<any> {
    return this.http.get('http://localhost:3000/employees');
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/employees/${id}`); // important to use backtick
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/employees/${id}`, data); // important to use backtick
  }
}
