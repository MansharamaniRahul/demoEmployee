import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { EmployeeService } from "../employee.service";
import { MatDialog } from "@angular/material";
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  selector: "app-add-employee",
  templateUrl: "./add-employee.component.html",
  styleUrls: ["./add-employee.component.css"]
})
export class AddEmployeeComponent implements OnInit {
  departmentList = [];
  ngOnInit() {
    this.departmentList = [
      { name: "HR", id: 1 },
      { name: "Testing", id: 2 },
      { name: "RnD", id: 3 },
      { name: "Facility", id: 4 }
    ];
  }
  showSpinner = false;

  //Created form group for binding all the employee details to one object
  profileForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    contactNumber: new FormControl(""),
    department: new FormControl("")
  });

  //Method to addd employee details to the DB.
  addEmployee = () => {
    // this.showSpinner = true;
    this.employeeService.save(this.profileForm.value);
    // .subscribe(
    //   data => {
    //     this.showSpinner = false;
    //     this.dialog.open(DialogComponent, {
    //       width: "40%",
    //       data: { msg: "Employee Details Saved Successfully !!" }
    //     });
    //   },
    //   errot => {
    //     this.showSpinner = false;
    //     this.dialog.open(DialogComponent, {
    //       width: "40%",
    //       data: { msg: "Error occured while adding employee details !!" }
    //     });
    //   }
    // );
  };
  constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog
  ) {}
}
