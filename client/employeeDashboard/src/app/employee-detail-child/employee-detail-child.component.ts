import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-employee-detail-child",
  templateUrl: "./employee-detail-child.component.html",
  styleUrls: ["./employee-detail-child.component.css"]
})
export class EmployeeDetailChildComponent implements OnInit {
  constructor() {}
  @Input() lastName;
  ngOnInit() {}
}
