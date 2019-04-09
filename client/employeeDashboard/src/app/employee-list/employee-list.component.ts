import { Component, OnInit, ViewChild } from "@angular/core";
import { EmployeeService } from "../employee.service";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Employee } from "../Employee";
import { DialogComponent } from "../dialog/dialog.component";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = [
    "firstName",
    "lastName",
    "email",
    "contactNumber",
    "department"
  ];
  //showSpinner = true;
  resultsLength = 0;
  isLoadingResults = true;
  dataSource: MatTableDataSource<Employee>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog,
    private router: Router
  ) {
    //this.showSpinner = true;
    //this.dataSource = new MatTableDataSource(this.employeeService.get());
    // this.employeeService.get().subscribe(
    //   data => {
    //     this.dataSource = new MatTableDataSource(data);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //     this.showSpinner = false;
    //   },
    //   error => {
    //     this.showSpinner = false;
    //     this.dialog.open(DialogComponent, {
    //       width: "40%",
    //       data: { msg: "Error occured while fetching employee details !!" }
    //     });
    //   }
    // );
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.employeeService.get());
  }

  onEmployeeSelected(employee) {
    this.router.navigate(["employeeDetail", employee.id]);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
