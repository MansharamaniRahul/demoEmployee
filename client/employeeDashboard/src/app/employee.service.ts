import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Employee } from "./Employee";
import Constants from "./app-constants";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })
};
@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  employeeList = [];
  count = 0;
  save(employeeDetails: Employee): any {
    employeeDetails["id"] = this.count;
    this.count += 1;
    this.employeeList.push(employeeDetails);
    // return this.http.post(Constants.addEmployee, employeeDetails, httpOptions);
  }

  get(): Employee[] {
    return this.employeeList;
    // return this.http.get<Employee[]>(Constants.getEmployeeList, httpOptions);
  }

  getEmployeeDetail(id) {
    return this.employeeList.filter(d => d.id == parseInt(id));
  }
}
