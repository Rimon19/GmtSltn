import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { StoreLocation } from '../../../@core/data/Library-Modul-model/store-location';
import { StoreLocationService } from '../../../@core/mock/library/store-location.service';
import { CompanyService } from '../../../@core/mock/company.service';
import { LocationService } from '../../../@core/mock/location.service';

@Component({
  selector: 'ngx-store-location',
  templateUrl: './store-location.component.html',
  styleUrls: ['./store-location.component.scss']
})
export class StoreLocationComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
 
  displayedColumns =
   [
    'id',
    'storeName',
    'companyName',
    'location'
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  storeLocation:StoreLocation[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     public storeLocationService:StoreLocationService,
     private companyService:CompanyService,
     private locationService:LocationService
     
     ) { }
    

  ngOnInit() {
 this.getStoreLocation();

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
    this.router.navigate(["/pages/add-store-location"]);
   
  }
    delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.storeLocationService.deleteStoreLocation(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getStoreLocation();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
    }
  getStoreLocation(){
    this.subscription=this.storeLocationService.getStoreLocation().subscribe(data=>{
    this.storeLocation=data;
    this.storeLocation.forEach(element => {
      this.companyService.getAllCompany().subscribe(data=>{
        let companyNames=data.find(f=>f.compID==element.companyName)&&data.find(f=>f.compID==element.companyName).company_Name;
        element.companyName=companyNames;
      })

      this.locationService.getAllLocations().subscribe(data=>{
        let locationNames=data.find(f=>f.locationId==element.location) &&data.find(f=>f.locationId==element.location).location_Name;
        element.location=locationNames;
      })
    });
  
    this.dataSource=new MatTableDataSource(this.storeLocation);
    console.log('storeLocation',this.storeLocation);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-store-location/",element.id]);  
      }


}
