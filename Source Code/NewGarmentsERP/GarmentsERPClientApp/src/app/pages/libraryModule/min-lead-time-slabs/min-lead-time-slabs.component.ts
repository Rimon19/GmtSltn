import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { MinLeadTimeSlabs } from '../../../@core/data/Library-Modul-model/min-lead-time-slabs';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';
import { MinLeadTimeSlabsService } from '../../../@core/mock/library/min-lead-time-slabs.service';
import { CompanyService } from '../../../@core/mock/company.service';
import { company } from '../../../@core/data/company';
import { LocationService } from '../../../@core/mock/location.service';
import { location } from '../../../@core/data/location';

@Component({
  selector: 'ngx-min-lead-time-slabs',
  templateUrl: './min-lead-time-slabs.component.html',
  styleUrls: ['./min-lead-time-slabs.component.scss']
})
export class MinLeadTimeSlabsComponent implements OnInit {
  public companyListItems:company[]=[];
  public sampleTypeList:any[]=[];
  public ProductTypeList:any[]=[];
  public ProductCategoryList:any[]=[];
  public locationListItems:location[]=[];
  public yearListItems:any[]=[];
  public monthListItems:any[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
    'id',
    'companyId',
    'locationId',
    'yearId',
    'monthId',
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  minLeadTimeSlabs:MinLeadTimeSlabs[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private locationService:LocationService,
     private companyService:CompanyService,
     private staticFeaturesService:StaticFeaturesService,
     private minLeadTimeSlabsService:MinLeadTimeSlabsService,) { }
    

  ngOnInit() {
 this.getGarmentsItemEntries();

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-min-lead-time-slabs"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.minLeadTimeSlabsService.deleteMinLeadTimeSlabs(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getGarmentsItemEntries();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  getGarmentsItemEntries(){
    this.subscription=   this.minLeadTimeSlabsService.getAllMinLeadTimeSlabs().subscribe(data=>{
    this.minLeadTimeSlabs=data;  
   this.minLeadTimeSlabs.forEach((res)=>{
    this. companyService.getAllCompany().
    subscribe(data=>{
    this.companyListItems=data;
    console.log('company list',this.companyListItems)
    let companyName=this.companyListItems.find(data=>data.compID==res.companyId).company_Name;
    res.companyId=companyName;
  });
   })
   this.minLeadTimeSlabs.forEach((res)=>{
    this.locationService.getAllLocations().
    subscribe(data=>{
    this.locationListItems=data;
    console.log('location list',this.locationListItems);
    let locationName=this.locationListItems.find(data=>data.locationId==res.locationId).location_Name;
       res.locationId=locationName;
          });
   })
   this.minLeadTimeSlabs.forEach((res)=>{
    this.staticFeaturesService.getAllYears().
    subscribe(data=>{
    this.yearListItems=data;
    console.log('yearListItems',this.yearListItems);
    let yearName=this.yearListItems.find(data=>data.id==res.yearId).year;
       res.yearId=yearName;
          });
   })
   this.minLeadTimeSlabs.forEach((res)=>{
     this.staticFeaturesService.getAllMonths().subscribe((data)=>{
      this.monthListItems=data;
      let monthlistName=this.monthListItems.find((data)=>data.id==res.monthId).monthName;
      res.monthId=monthlistName;
     })
   })
    this.dataSource=new MatTableDataSource(this.minLeadTimeSlabs);
    console.log('minLeadTimeSlabs',this.minLeadTimeSlabs);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-min-lead-time-slabs/",element.id]);  
      }

}
