import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { StoreLocation } from '../../../@core/data/Library-Modul-model/store-location';
import { StoreLocationService } from '../../../@core/mock/library/store-location.service';

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
  
    this.dataSource=new MatTableDataSource(this.storeLocation);
    console.log('storeLocation',this.storeLocation);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-store-location/",element.id]);  
      }


}
