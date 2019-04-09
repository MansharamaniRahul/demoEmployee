import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { EmployeeDetaiComponent } from "./employee-detai/employee-detai.component";

const routes: Routes = [
  { path: "addEmployee", component: AddEmployeeComponent },
  { path: "employeeList", component: EmployeeListComponent },
  { path: "employeeDetail/:id", component: EmployeeDetaiComponent },
  { path: "", redirectTo: "/employeeList", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
