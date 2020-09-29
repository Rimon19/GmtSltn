import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort, MatPaginator, MatTableDataSource } from "@angular/material";
import { Tostr } from "../../../@core/data/tostr.model";
import { ServiceBookingForAOPWithoutOrderService } from "../../../@core/mock/marchandizer/service-booking-for-aopwithout-order.service";
import { NbToastrService } from "@nebular/theme";
import { MatDialogService } from "../../../@core/mock/mat-dialog.service";
import { Router } from "@angular/router";
import { BuyerProfileService } from "../../../@core/mock/library/buyer-profile.service";
import { SupplierProfileService } from "../../../@core/mock/library/supplier-profile.service";
import { DatapassingService } from "../../../@core/mock/shared/datapassing.service";
import { FormBuilder } from "@angular/forms";
import { DropdownValueService } from "../../../@core/mock/shared/dropdown-value.service";
import { CompanyService } from "../../../@core/mock/company.service";
import { ServiceBookingForAOPWithoutOrderDetailsService } from '../../../@core/mock/marchandizer/service-booking-for-aopwithout-order-details.service';

@Component({
  selector: "ngx-service-booking-for-aopwithout-order",
  templateUrl: "./service-booking-for-aopwithout-order.component.html",
  styleUrls: ["./service-booking-for-aopwithout-order.component.scss"],
})
export class ServiceBookingForAOPWithoutOrderComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = [
    "id",
    "woNo",
    "companyNameId",
    "buyerNameId",
    "bookingDate",
    "currencyId",
    "exchangeRate",
    "payMode",
    "source",
    "aopSource",
    "supplierNameId",
    "attention",
  ];
  Tostr = new Tostr();
  filterValues: any = {};
  filterSelectObj = [
    {
      name: "Wo No",
      columnProp: "woNo",
    },
  ];

  constructor(
    public serviceBookingForAOPWithoutOrderService: ServiceBookingForAOPWithoutOrderService,
    private toastrService: NbToastrService,
    private mathdialogService: MatDialogService,
    private router: Router,
    public serviceBookingForAOPWithoutOrderDetailsService:ServiceBookingForAOPWithoutOrderDetailsService,
    private companyService: CompanyService,
    private buyerProfileService: BuyerProfileService,
    private supplierProfileService: SupplierProfileService,
    private datapassingService: DatapassingService,
    private fb: FormBuilder,
    private dropdownValueService: DropdownValueService
  ) {}

  ngOnInit() {
    this.dropdownValueService.getBuyers();
    this.dropdownValueService.getSuppliers();
    this.dropdownValueService.getCurrency();
    this.dropdownValueService.getCompany();
    this.dropdownValueService.getTeamleaders();
    this.dropdownValueService.getUsers();
    this.refresList();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  redirectToAddPage() {
    this.router.navigate(["/pages/add-service-booking-forAOP-withoutOrder"]);
  }
  redirectToEditPage(element) {
    this.router.navigate([
      "/pages/edit-service-booking-forAOP-withoutOrder",
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
          this.serviceBookingForAOPWithoutOrderService
            .delete(element.id)
            .subscribe(
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
    this.serviceBookingForAOPWithoutOrderService.getAll().subscribe((items) => {
      items.forEach((element) => {
          //Get company name from company table and then assaign to companyID
        if (element.companyNameId != 0) {
          let companyName = this.dropdownValueService.companyList.find(
            (f) => f.compID == element.companyNameId
          ).company_Name;
          element.companyNameId=companyName;
        }
        else{
          element.companyNameId=''
        }
        //Get currency name from DiscountMethod table and then assaign to currencyId
        if(element.currencyId!=0){
          let currencyName=this.dropdownValueService.currencyList.find(
            f=>f.id==element.currencyId).discountMethodName;
            element.currencyId=currencyName;
        }
        else{
          element.currencyId='';
        }
         //Get Supplier name from Supplier table and then assaign to supplierNameId
         if (element.supplierNameId!=0) {
          let supplierName=this.dropdownValueService.subpplierList.find(
            f=>f.id==element.supplierNameId
          ).supplierName;
          element.supplierNameId=supplierName;
        } else {
          element.supplierNameId='';
        }
         //Get buyer name from buyer table and then assaign to buyerID
       if(element.buyerNameId!=0){
        let buyerName=this.dropdownValueService.buyerList
       .find(f=>f.id==element.buyerNameId).contactName;
           element.buyerNameId=buyerName;
       }else{
         element.buyerNameId='';
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
  redirectToAddPageForDetailsEntry(id){
     
     this.serviceBookingForAOPWithoutOrderDetailsService.getAll().subscribe(data=>{
      this.datapassingService.setValue(id);
      let obj= data.find(f=>f.serviceBookingForAOPWithoutOrderId==id)
      console.log(obj)
  if(obj==undefined){
    console.log('save cakk')
    this.router.navigate(["/pages/add-serviceBooking-forAOP-withoutOrderDetails"]);
  }else{
    console.log('edit cakk');
    this.router.navigate(["/pages/edit-serviceBooking-forAOP-withoutOrderDetails/",id]);  
  }
     })
     
     
  }
}
