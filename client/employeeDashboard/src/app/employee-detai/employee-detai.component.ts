import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from "../employee.service";
import { EmployeeDetailChildComponent } from "../employee-detail-child/employee-detail-child.component";

@Component({
  selector: "app-employee-detai",
  templateUrl: "./employee-detai.component.html",
  styleUrls: ["./employee-detai.component.css"]
})
export class EmployeeDetaiComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private empService: EmployeeService
  ) {}
  employee = {};
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.employee = this.empService.getEmployeeDetail(id)[0];
  }
}
