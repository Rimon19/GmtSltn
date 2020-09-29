import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { NbToastrService } from "@nebular/theme";
import { Router } from "@angular/router";
import { Tostr } from "../../../../../@core/data/tostr.model";
import { SewingOperationForWorkStudyService } from "../../../../../@core/mock/planning/sewing-operation-for-work-study.service";
import { MatDialogService } from "../../../../../@core/mock/mat-dialog.service";
import { DropdownValueService } from "../../../../../@core/mock/shared/dropdown-value.service";

@Component({
  selector: "ngx-sewing-operation-for-work-study",
  templateUrl: "./sewing-operation-for-work-study.component.html",
  styleUrls: ["./sewing-operation-for-work-study.component.scss"],
})
export class SewingOperationForWorkStudyComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = [
    "id",
    "productDept",
    "garmentsItemId",
    "bodyPartId",
    "code",
    "operationName",
    "rate",
    "fabricTypeId",
    "smvBasis",
    "seamLength",
    "machineSMV",
    "manualSMV",
    "departmentCode",
    "resourceId",
    "uomId",
    "action"
  ];
  Tostr = new Tostr();
  filterValues: any = {};
  filterSelectObj = [
    {
      name: "Garments Item",
      columnProp: "garmentsItemId",
    },
    {
      name: "Body Part",
      columnProp: "bodyPartId",
    },
    {
      name: "Operation Name",
      columnProp: "operationName",
    },
    {
      name: "Resource",
      columnProp: "resourceId",
    },
  ];
  constructor(
    private sewingOperationForWorkStudyService: SewingOperationForWorkStudyService,
    private toastrService: NbToastrService,
    private mathdialogService: MatDialogService,
    private router: Router,
    private dropdownValueService: DropdownValueService
  ) {}

  ngOnInit() {
    this.dropdownValueService.getProductDept();
    this.dropdownValueService.getGarmentsItem();
    this.dropdownValueService.getBodyPart();
    this.dropdownValueService.getFabricDescription();
    this.dropdownValueService.getSMVBasic();
    this.dropdownValueService.getDepartmentCode();
    this.dropdownValueService.getUom();
    this.dropdownValueService.getStatus();
    this.dropdownValueService.getAllResources();

    this.refresList();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  redirectToAddPage() {
    this.router.navigate([
      "/pages/planning/add-sewing-operation-For-Work-Study",
    ]);
  }
  redirectToEditPage(element) {
    this.router.navigate([
      "/pages/planning/edit-sewing-operation-For-Work-Study",
      element.id,
    ]);
  }

  onDelete(element) {
    console.log(element);
    this.mathdialogService
      .openConfirmDialog("Are you sure to delete this record ?")
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.sewingOperationForWorkStudyService.delete(element.id).subscribe(
            (res) => {
              this.refresList();
              this.Tostr.showToast(
                "primary",
                "",
                "Deleleted",
                "Successfully",
                this.toastrService
              );
            },
            (err) => {
              this.Tostr.showToast(
                "danger",
                "",
                err.statusText,
                "",
                this.toastrService
              );
            }
          );
        }
      });
  }

  refresList() {
    this.sewingOperationForWorkStudyService.getAll().subscribe((items) => {
      items.forEach((element) => {
        if (element.garmentsItemId != 0) {
          let itemName = this.dropdownValueService.garmentsItemList.find(
            (f) => f.id == element.garmentsItemId
          ).itemName;
          element.garmentsItemId = itemName;
        } else {
          element.garmentsItemId = "";
        }

        if (element.bodyPartId != 0) {
          let bodyPartFullName = this.dropdownValueService.bodyPartList.find(
            (f) => f.id == element.bodyPartId
          ).bodyPartFullName;
          element.bodyPartId = bodyPartFullName;
        } else {
          element.bodyPartId = "";
        }

        if (element.fabricTypeId != 0) {
          let fabNature = this.dropdownValueService.fabricDescriptionList.find(
            (f) => f.id == element.fabricTypeId
          ).fabNature;
          element.fabricTypeId = fabNature;
        } else {
          element.fabricTypeId = "";
        }

        if (element.uomId != 0) {
          let uomName = this.dropdownValueService.uomList.find(
            (f) => f.id == element.uomId
          ).uomName;
          element.uomId = uomName;
        } else {
          element.uomId = "";
        }

        if (element.resourceId != 0) {
          let resourceName = this.dropdownValueService.resourcesList.find(
            (f) => f.id == element.resourceId
          ).resourceName;
          element.resourceId = resourceName;
        } else {
          element.resourceId = "";
        }
        if (element.rate == 0) {
          element.rate = "";
        }
        if (element.seamLength == 0) {
          element.seamLength = "";
        }
        if (element.machineSMV == 0) {
          element.machineSMV = "";
        }
        if (element.manualSMV == 0) {
          element.manualSMV = "";
        }
      });

      this.dataSource = new MatTableDataSource(items);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  filterChange(filter, event) {
    //let filterValues = {}
    this.dataSource.filterPredicate = this.createFilter();
    this.filterValues[
      filter.columnProp
    ] = event.target.value.trim().toLowerCase();
    this.dataSource.filter = JSON.stringify(this.filterValues);
  }

  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== "") {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col]
              .trim()
              .toLowerCase()
              .split(" ")
              .forEach((word) => {
                if (
                  data[col].toString().toLowerCase().indexOf(word) != -1 &&
                  isFilterSet
                ) {
                  found = true;
                }
              });
          }
          return found;
        } else {
          return true;
        }
      };
      return nameSearch();
    };
    return filterFunction;
  }

  resetFilters() {
    this.filterValues = {};

    this.filterSelectObj.forEach((value: any, key) => {
      value.modelValue = undefined;
    });
    this.dataSource.filter = "";
    this.refresList();
  }
}
