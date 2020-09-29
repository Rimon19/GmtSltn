import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatDialogRef,
  MatSort,
  MatPaginator,
  MatTableDataSource,
} from "@angular/material";
import { Tostr } from "../../../@core/data/tostr.model";
import { Subscription } from "rxjs";
import { FabricDesPreCost } from "../../../@core/data/marchanzider-model/fabric-des-pre-cost.model";
import { NbToastrService } from "@nebular/theme";
import { MatDialogService } from "../../../@core/mock/mat-dialog.service";
import { Router } from "@angular/router";
import { FabricDesPreCostService } from "../../../@core/mock/marchandizer/fabric-des-pre-cost.service";
import { DatapassingService } from '../../../@core/mock/shared/datapassing.service';
import { DateResizeService } from '../../../@core/mock/marchandizer/date-resize.service';

@Component({
  selector: "ngx-fabric-description",
  templateUrl: "./fabric-description.component.html",
  styleUrls: ["./fabric-description.component.scss"],
})
export class FabricDescriptionComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  filterValues:any={};
  filterSelectObj  = [
    {
        name: 'Fabric Nature',
        columnProp: 'fabNature'
      },{
        name: 'Construction',
        columnProp: 'construction'
      },{
        name: 'GSM/Weight',
        columnProp: 'gsmWeight'
      },{
        name: 'Color Range',
        columnProp: 'colorRange'
      },{
        name: 'Stich Length',
        columnProp: 'stichLength'
      },{
        name: 'Process Loss',
        columnProp: 'processLoss'
      }, 
      {
        name: 'Composition',
        columnProp: 'composition'
      }, 
  ]
  displayedColumns = [
    "fabNature",
    "construction",
    "gsmWeight",
    "colorRange",
    "stichLength",
    "processLoss",
    "composition",
  ];
  Tostr = new Tostr();
  subscription: Subscription;
  fabricDesPreCost: FabricDesPreCost[];
  fabricDescription:string;
  constructor(
    private dialogbox:MatDialogRef<FabricDescriptionComponent>,
    private toastrService: NbToastrService,
    private mathdialogService: MatDialogService,
    private datapassingService:DatapassingService,
    private router: Router,
    private dateResizeService:DateResizeService,
    private fabricDesPreCostService: FabricDesPreCostService
  ) {}

  ngOnInit() {
    this.refresList();
    this.dialogbox.updatePosition({ top:'100px',
    left:'250px'});
  }
  onClose(){

    this.dialogbox.close();
  }
  selectFabricDescriptionRow(element){
this.dateResizeService.subject1.subscribe(i=>{
  console.log(i);
   this.dateResizeService.setFabricDesSourceObj.next({index:i,id:element.id,fabricDescription:element.fabricDescriptionDetails});
 });
  this.dialogbox.close();
}


  AddNewInpurRow() {
    this.router.navigate(["/pages/FabricDesPreCost-create"]);
  }
  delete(element) {
    console.log(element);
    this.mathdialogService
      .openConfirmDialog("Are you sure to delete this record ?")
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.fabricDesPreCostService.delete(element.id).subscribe(
            (res) => {
              this.Tostr.showToast(
                "primary",
                "",
                "Deleleted",
                "Successfully",
                this.toastrService
              );
              this.getFabricDesPreCostInfoDetails();
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
  getFabricDesPreCostInfoDetails() {
    this.subscription = this.fabricDesPreCostService
      .getAll()
      .subscribe((data) => {
        this.fabricDesPreCost = data;

        this.dataSource = new MatTableDataSource(this.fabricDesPreCost);
        console.log("po details", this.fabricDesPreCost);
      });
  }
  edit(element) {
    this.router.navigate(["/pages/FabricDesPreCost-edit/", element.id]);
  }

  refresList() {
    this.fabricDesPreCostService.getAll().subscribe((item) => {
      console.log(item);
      this.dataSource = new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  
  filterChange(filter, event) {
    //let filterValues = {}
    this.dataSource.filterPredicate = this.createFilter(); 
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }
  applyFilter(filterValue: string) {
   
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }
  
      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
              if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
                found = true
              }
            });
          }
          return found
        } else {
          return true;
        }
      }
      return nameSearch()
    }
    return filterFunction
  }
  
  resetFilters() {
    this.filterValues = {}
  
    this.filterSelectObj.forEach((value:any, key) => {
      value.modelValue = undefined;
    })
    this.dataSource.filter = "";
    this.refresList();
  }
}
