import { Component, OnInit, ViewChild } from '@angular/core';
import { SewingLine } from '../../../@core/data/Library-Modul-model/sewing-line';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { SewingLineService } from '../../../@core/mock/library/sewing-line.service';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';
import { CompanyService } from '../../../@core/mock/company.service';
import { company } from '../../../@core/data/company';
import { LocationService } from '../../../@core/mock/location.service';
import { location } from '../../../@core/data/location';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';

@Component({
  selector: 'ngx-sewing-line',
  templateUrl: './sewing-line.component.html',
  styleUrls: ['./sewing-line.component.scss']
})
export class SewingLineComponent implements OnInit {

  public  SewingLineList:SewingLine[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
'id',
'companyId',
'locationId',
'floorId',
'lineName',
'sewingGroup',
'status'

  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
 public sewingLine:SewingLine[]; 
 public companyListItems:company[]; 
 public locationListItems:location[]; 
 public floorListItems:any[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     public sewingLineService:SewingLineService,
     public companyService:CompanyService,
     public locationService:LocationService,
     public staticFeaturesService:StaticFeaturesService,
     public dropdownValueService:DropdownValueService,
     ) { }
    

  ngOnInit() {
 this.getSewingLine();

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
 
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-sewing-line"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.sewingLineService.deleteSewingLine(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getSewingLine();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  getSewingLine(){
    this.subscription=   this.sewingLineService.getSewingLine().subscribe(data=>{
    this.sewingLine=data;
   
        this.sewingLine.forEach(res=>{

         //Get company name from company table and then assaign to companyId
         this.companyService.getAllCompany().subscribe((data) => {
          this.companyListItems = data;
          let companyName = this.companyListItems.find(
            (f) => f.compID == res.companyId
          ).company_Name;
          res.companyId = companyName;
        });

          //Get location name from loaction table and then assaign to locationId
          this.locationService.getAllLocations().subscribe((data) => {
            this.locationListItems = data;
            let locationName = this.locationListItems.find(
              (f) => f.locationId == res.locationId
            ).location_Name;
            res.locationId = locationName;
          });
          
          //Get floor name from floor table and then assaign to floorId
          this.staticFeaturesService.getAllFloors().subscribe((data) => {
            this.floorListItems = data;
            let floorName = this.floorListItems.find(
              (f) => f.id == res.floorId
            ).floorName;
            res.floorId = floorName;
          });




        })


    this.dataSource=new MatTableDataSource(this.sewingLine);
    console.log('sewingLine',this.sewingLine);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-sewing-line/",element.id]);  
      }

}
